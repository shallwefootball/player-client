import makeUrl from 'make-url'
import url from 'url'


const host = typeof window == 'undefined' ? 'http://localhost:4000' : ('http://' + location.hostname + ':4000')

const dev = {
  host: host,
  imageUrl: 'http://shallwefootball.com:1000'
}

const prod = {}

const _getUrl = (path, params) => {
  return url.resolve(dev.host, makeUrl(path, params))
}

const apiUrl = {
  getClub({ clubId }) {
    return _getUrl('/club/:clubId', { clubId })
  },
  getClubs({ leagueId }) {
    return _getUrl('/clubs/:leagueId', { leagueId })
  },
  getLeague() {
    return _getUrl('/league')
  },
  getLeagueRank({ leagueId }) {
    return _getUrl('/league-rank/:leagueId', { leagueId })
  },
  getMatch({ matchId }) {
    return _getUrl('/match/:matchId', { matchId })
  },
  getMatches({ leagueId }) {
    return _getUrl('/matches/:leagueId', { leagueId })
  },
  getWillMatch({ leagueId, clubId }) {
    return _getUrl('/will-match/:leagueId/:clubId', { leagueId, clubId })
  },
  getLineup() {
    return _getUrl('/lineup')
  },
  getPlayer() {
    return _getUrl('/player')
  },
  getPlayers() {
    return _getUrl('/players')
  },
  getPlayersClubId({ clubId }) {
    return _getUrl('/players/:clubId', { clubId })
  },
  getPlayersMatchIdClubId({ matchId, clubId }) {
    return _getUrl('/players/:matchId/:clubId', { matchId, clubId })
  },
  getRecord() {
    return _getUrl('/record')
  },
  getRecordRecordId({ recordId }) {
    return _getUrl('/record/:recordId', { recordId })
  },
  getRecords({ matchId }) {
    return _getUrl('/records/:matchId', { matchId })
  },
  getTeam({ clubId }) {
    return _getUrl('/team/:clubId', { clubId })
  },
  getUsers({ char }) {
    return _getUrl('/users/:char', { char })
  }
}

export {
  dev,
  apiUrl
}