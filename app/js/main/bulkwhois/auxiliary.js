var debug = require('debug')('main.bulkwhois.auxiliary');

// Reset ui counters at process stage
function resetUiCounters(event) {
  //var send = event.sender.send;

  debug("Resetting bulk whois UI counters");


  var startingValue = 0;
  var defaultValue = '-';

  event.sender.send('bulkwhois:status.update', 'start');

  // Domains
  event.sender.send('bulkwhois:status.update', 'domains.total', startingValue);
  event.sender.send('bulkwhois:status.update', 'domains.waiting', startingValue);
  event.sender.send('bulkwhois:status.update', 'domains.sent', startingValue);
  event.sender.send('bulkwhois:status.update', 'domains.processed', startingValue);

  // Timers
  event.sender.send('bulkwhois:status.update', 'time.current', defaultValue);
  event.sender.send('bulkwhois:status.update', 'time.remaining', defaultValue);

  // Request Times
  event.sender.send('bulkwhois:status.update', 'reqtimes.maximum', startingValue);
  event.sender.send('bulkwhois:status.update', 'reqtimes.minimum', startingValue);
  event.sender.send('bulkwhois:status.update', 'reqtimes.last', startingValue);
  event.sender.send('bulkwhois:status.update', 'reqtimes.average', startingValue);

  // Status numerical
  event.sender.send('bulkwhois:status.update', 'status.available', startingValue);
  event.sender.send('bulkwhois:status.update', 'status.unavailable', startingValue);
  event.sender.send('bulkwhois:status.update', 'status.error', startingValue);

  // Status last domain
  event.sender.send('bulkwhois:status.update', 'laststatus.available', defaultValue);
  event.sender.send('bulkwhois:status.update', 'laststatus.unavailable', defaultValue);
  event.sender.send('bulkwhois:status.update', 'laststatus.error', defaultValue);

}

module.exports = {
  resetUiCounters: resetUiCounters,
  rstUiCntrs: resetUiCounters
}
