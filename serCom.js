const serialPort = require('serialport')
var portName = process.argv[2];

var myPort = new serialPort('COM10',{
	baudRate: 9600 // standard bit rate 
})


/*
myPort.on('data', function(data){
	console.log(data)
})
*/

/*
myPort.on('readable', function() {
	console.log('Data:', port.read() )
})

*/

/*var myPort = new SerialPort('COM10',{
	baudRate: 15200
})
*/


myPort.on('open', function(){
	console.log('Serial Port Open')
	console.log('Initializing Ground Station Link.....')
	console.log('Connection to Ground Station Successful')
	console.log('***Transmitting Data***')
})

/*
SerialPort.list((err, ports) => {
	console.log('ports', ports)

	if (ports.length === 0)
	{
		console.log('Error', err.message)
	}

	ports.forEach(port => console.log(port))


	
})



*/







/*
myPort.open(function (err){
	if (err)
	{
		return console.log('Error in opening port: ', err.message)

	}

	port.write('main screen turn on')
})
*/
