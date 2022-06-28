
import app from './app';


app.listen(app.set('port'));

console.log('estas escuchando en', app.get('port'));