const { exec } = require('child_process');
const path = require('path');

exports.handler = async function(event, context) {
  return new Promise((resolve, reject) => {
    exec(
      'php ' + path.join(__dirname, 'my-php-function.php'),
      (error, stdout, stderr) => {
        if (error) {
          reject({
            statusCode: 500,
            body: `Error: ${stderr}`,
          });
        }
        resolve({
          statusCode: 200,
          body: stdout,
        });
      }
    );
  });
};
