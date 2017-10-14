'use strict'

import Ru from 'rutils'
import moement from 'moment'

const makeBlockChainApi = conf => {

  /**
   * Get Real Safe Organization
   */
  const getRSO = spec => {
    return {
      name: 'Lower Manhattan Real Estate Trust',
      token: 'LLC NYC18'
      totalTokensIssued: 100000,
      numOfOwners: 17,
      createdDate: '2018-02-03T16:13:10+03:00',
      avatar: {
        xs: '',
        sm: '',
        md: '',
        lg: ''
      }
      issues: [
        {
          id: 'id1',
          type: 'Secondary Offering',
          description: 'Raise $1,000,000 to buy 62 Jane St,',
          vote: {
            yes: '42%',
            no: '23%'
          },
          expirationDate: moment().add(3, 'days')
        },
        {
          id: 'id2',
          type: 'Mngmt Change',
          description: 'Change Property Manager',
          vote: {
            yes: '12%',
            no: '83%'
          },
          expirationDate: moment().subtract(3, 'days')
        },
        {
          id: 'id3',
          type: 'Real World Sell',
          description: 'Sell 32 Jane at minimum of $3,200,000',
          vote: {
            yes: '22%',
            no: '83%'
          },
          expirationDate: moment().add(6, 'days')
        },
        {
          id: 'id4',
          type: 'Real World Sell',
          description: 'Sell 32 Jane at minimum of $3,200,000',
          vote: {
            yes: '22%',
            no: '83%'
          },
          expirationDate: moment().add(6, 'days')
        },
      ],

      assets: [
        {
          name: '32 Jane St.',
          lotNumber: '32BLKA',
          estimatedValue: 1200000,
          dateOfValueEstimation: '2016-10-03T16:13:10+03:00'
        },
        {
          name: '9 Houston',
          lotNumber: '9BLKB',
          estimatedValue: 8500000,
          dateOfValueEstimation: '2015-12-04T16:13:10+03:00'
        },
      ]
    }
  }

  return {
    getRSO
  }
}

const blockChainApi = makeBlockChainApi()

export default blockChainApi
