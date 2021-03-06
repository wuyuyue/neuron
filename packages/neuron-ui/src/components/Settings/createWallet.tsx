import React, { useContext } from 'react'
import styled from 'styled-components'
import SettingsContext from '../../contexts/settings'

import { FullView } from './index'
import ActionFlow, { ActionStep } from '../ActionFlow'
import ActionA from './actionA'
import ActionB from './actionB'
import ActionC from './actionC'
import ActionD from './actionD'

const CreateWalletDiv = styled(FullView)`
  padding-top: 20px;
`

export default (props: any) => {
  const settingsContext = useContext(SettingsContext)
  return (
    <CreateWalletDiv>
      <ActionFlow>
        <ActionStep
          title="mnemonic"
          onAfterBack={() => {
            props.history.goBack()
          }}
        >
          <ActionA />
        </ActionStep>
        <ActionStep title="seed" onBeforeNext={() => settingsContext.seedsValid}>
          <ActionB />
        </ActionStep>
        <ActionStep title="password" onBeforeNext={() => settingsContext.passwordValid}>
          <ActionC />
        </ActionStep>
        <ActionStep
          title="wallet"
          onAfterNext={() => {
            settingsContext.passwordValid = false
            props.history.push('/settings')
          }}
        >
          <ActionD />
        </ActionStep>
      </ActionFlow>
    </CreateWalletDiv>
  )
}
