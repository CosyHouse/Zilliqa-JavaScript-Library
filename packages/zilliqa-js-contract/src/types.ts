//  Copyright (C) 2018 Zilliqa
//
//  This file is part of Zilliqa-Javascript-Library.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { Omit } from 'utility-types';
import * as core from '@zilliqa-js/core';

export type TxParams = core.TxParams;
export type ContractObj = core.ContractObj;
export type Transition = core.Transition;
export type ABI = core.ABI;
export type Value = core.Value;
export type Field = core.Field;

export enum ContractStatus {
  Deployed,
  Rejected,
  Initialised,
}

export type DeployParams = Omit<
  TxParams,
  'toAddr' | 'amount' | 'code' | 'data' | 'receipt' | 'signature'
>;

export type CallParams = Omit<
  TxParams,
  'toAddr' | 'data' | 'code' | 'receipt' | 'signature'
>;

export type Param = Value;
export type TransitionParam = Value;

export type Init = Value[];

// Post v5.0.0 upgrade
export type State = any;

export interface TransitionPayload {
  // the name of the transtion to be called
  _tag: string;
  // amount to send to the contract, if any
  _amount: string;
  params: Value[];
}

// RPC Error Responses
export type DeployError =
  | 'Code is empty and To addr is null'
  | 'To Addr is null'
  | 'Non - contract address called'
  | 'Could not create Transaction'
  | 'Unable to process';

export interface DeploySuccess {
  TranID: string;
  Info: string;
  ContractAddress?: string;
}
