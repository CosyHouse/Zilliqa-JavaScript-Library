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

import * as core from '@zilliqa-js/core';

export type TxParams = core.TxParams;
export type TxCreated = core.TxCreated;
export type TxRejected = core.TxRejected;
export type TxReceipt = core.TxReceipt;
export type TxIncluded = core.TxIncluded;

export enum TxStatus {
  Initialised,
  Pending,
  Confirmed,
  Rejected,
}

export enum TxEventName {
  Error = 'error',
  Receipt = 'receipt',
  Track = 'track',
}
