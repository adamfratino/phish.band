import * as contentful from 'contentful'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { actions } from './../Shows'
import * as types from './types'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

const fetchPosts = () => client.getEntries({
  content_type: 'book',
  order: '-fields.date'
})

function* loadShows() {
  try {
    const posts = yield call(fetchPosts)
    yield put(actions.success(data.items))
  } catch (e) {
    console.log(e)
    yield put(actions.error(e))
  }
}

export default function* () {
  yield all([
    takeLatest(types.GET_DATA_ASYNC.PENDING, loadShows)
  ])
}
