// start rclone process
// TASKKILL /F /IM rclone.exe /T
// TASKKILL /F /IM rclone-ui.exe /T

let fs = require('fs')
let child_process = require('child_process')

async function wind(args) {
  return wind_start(args)
}

async function wind_start(args) {
  return new Promise(async resolve => {
    let rcloneExePath = args.appPath + '/extra-resource/win64/run.bat'

    if (!fs.existsSync(rcloneExePath)) {
      resolve({code: 400, msg: 'rclone not exists:' + rcloneExePath})
      return
    }

    let rs = {}


    let childProcess = child_process.exec(rcloneExePath + ' rcd  --rc-web-gui --rc-web-gui-no-open-browser --rc-no-auth --rc-user=gui --rc-pass=1 --rc-files="d:\\tmp\\build" -vv -', function (err) {
  //let childProcess = child_process.exec(rcloneExePath + ' rcd  --rc-web-gui  --rc-no-auth --rc-user=gui --rc-pass=1 --rc-files="./build/" -vv ', function (err) {

      if (err) {
        rs.code = 400
        rs.msg = err.message
        resolve(rs)
      }
    }); //

    childProcess.stderr.on('data', (data) => {
      console.log('[debug]', data)
      if (data.indexOf('Failed to start remote control') !== -1 && data.indexOf('Only one usage of each socket address') !== -1 && data.indexOf('is normally permitted') !== -1) {
        rs.code = 200
      } else if (data.indexOf('NOTICE: Serving remote control on') !== -1) {
        rs.code = 200;
        rs.data = {runByMe: true}
        resolve(rs);
      } else if (data.indexOf('Error:') === 0) {
        rs.code = 400;
        rs.msg = data.substr(0, data.indexOf('\n'));
        resolve(rs);
      }
    });

    childProcess.stderr.on('end', () => {
      if (rs.code === undefined) {
        rs.code = 400
        rs.msg = 'unknown error'
      }
      resolve(rs)
    });

    childProcess.on('close', (code) => {
      rs.code = 400
      rs.msg = `closed(${code})`
      resolve(rs)
    });
  })
}

async function wind_kill() {
  child_process.exec('TASKKILL /F /IM rclone.exe /T', function (err) { })
  return {code: 200}
}

async function start(args) {
  let rs = {}
  try {
    rs = await wind(args)
  } catch (e) {
    rs.code = 200
    rs.msg = e.message
  }
  if (rs.code !== 200) {
    console.log('start rclone error');
    return rs
  }
  console.log('start rclone success');
  return rs
}

async function kill() {
  return wind_kill()
}

module.exports = {start, kill}

// (() => start())()