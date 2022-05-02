// Modified from
// https://gist.github.com/ryanflorence/701407

const http = require("http"),
  url = require("url"),
  path = require("path"),
  fs = require("fs"),
  folder = process.argv[2] || "basic",
  port = process.argv[3] || 4040

/**
 * @param {string} filename 
 */
function getContentType(filename) {
  switch (filename.split('.').reverse()[0]) {
    case 'js':
      return 'application/javascript'
    case 'css':
      return 'text/css'
    case 'html':
      return 'text/html'
    default:
      return 'text/plain'
  }
}

http.createServer(function(request, response) {

  const uri = url.parse(request.url).pathname
  let filename = path.join(process.cwd(), folder, uri)
  
  fs.stat(filename, function(err,stats) {
    if (err) {
      response.writeHead(404, {'Content-Type': 'text/plain'})
      response.write('404 Not Found\n')
      response.end()
      return
    }

    if (stats.isDirectory()) filename += '/index.html'

    fs.readFile(filename, 'binary', function(err, file) {
      if(err) {
        response.writeHead(500, {'Content-Type': 'text/plain'})
        response.write(err + '\n')
        response.end()
        return
      }
      
      const contentType = getContentType(filename)
      response.writeHead(200, {'Content-Type': `${contentType}; charset=utf-8` })
      response.write(file, 'binary')
      response.end()
    })
  })
}).listen(parseInt(port, 10))

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown")