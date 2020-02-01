module.exports = {
  username: n => typeof n === 'string' && n.match(/\w[\w\d-_]{3,12}/),
  password: p => typeof p === 'string' && p.match(/\w[\w\d-_]{5,12}/)
}