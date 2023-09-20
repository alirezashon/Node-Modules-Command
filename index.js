

const { spawn } = require('child_process')
const exec = require('child_process').exec

function runCommand(command, args, options) {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(command, args, options)
        
		childProcess.stdout.on('data', (data) => {
            console.log(data.toString())
		})
        
		childProcess.stderr.on('data', (err) => {
            console.error(err.toString())
		})
        
		childProcess.on('exit', (code) => {
            if (code === 0) {
                resolve()
			} else {
                reject(new Error(`Child process exited with code ${code}`))
			}
		})
	})
}

// Step 1: Clone the Git repository
runCommand('git', ['clone', 'https://github.com/alirezashon/FaithLove.git'], {
    cwd: 'D:\\', // Set the current working directory
})
.then(() => {
    console.log('Git clone completed successfully.')
    // Step 2: Install dependencies using yarn
    exec('npm i', { cwd: 'D:\\FaithLove' }, (err, stdout) => {
        console.log(stdout)
        console.log('over')
    })
    
   
	})
	.then(() => {
		console.log('Yarn install completed successfully.')
		// Add any additional steps or commands here
	})
	.catch((error) => {
		console.error('Error:', error.message)
	})
