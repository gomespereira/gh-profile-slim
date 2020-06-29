import { h, Fragment } from 'preact'

import Info from '../components/Info'
import Repos from '../components/Repos'

export default function Profile() {
  return (
    <Fragment>
      <Info />
      <Repos />
    </Fragment>
  )
}
