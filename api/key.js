import { Injectable } from '@angular/core';

/**
 * ✅ ALL FLOW KEYS + TYPES (STRICT)
 */
export interface FlowKVState {
  // -------- META --------
  customerType: 'soleProp' | 'llc' | null;

  // -------- BUSINESS TYPE QUESTION --------
  businessTypeAnswer: 'soleProp' | 'llc' | null;

  // -------- IDENTIFICATION (NO API CASE) --------
  selectedBusinessType:
    | 'soleProp'
    | 'llc'
    | 'llp'
    | 'partnership'
    | 'other'
    | null;

  // -------- SOLE PROP FLOW --------
  solePropOwnsBusiness: boolean | null;

  // -------- LLC FLOW --------
  llcOwns50Percent: boolean | null;

  // -------- EXAMPLE BIG OBJECT --------
  llcDetails: {
    companyName?: string;
    cin?: string;
    directors?: { name: string; pan: string }[];
    bank?: { accountNo: string; ifsc: string };
  } | null;
}

/**
 * ✅ DEFAULT STATE (EXPLICITLY INITIALIZED)
 */
const DEFAULT_STATE: FlowKVState = {
  customerType: null,
  businessTypeAnswer: null,
  selectedBusinessType: null,
  solePropOwnsBusiness: null,
  llcOwns50Percent: null,
  llcDetails: null
};

@Injectable({ providedIn: 'root' })
export class FlowKVStoreService {
  private state: FlowKVState = { ...DEFAULT_STATE };

  // ✅ SET EXACTLY ONE KEY (TYPE SAFE)
  set<K extends keyof FlowKVState>(
    key: K,
    value: FlowKVState[K]
  ): void {
    this.state[key] = value;
    console.log(`✅ [KV] ${String(key)} =`, value);
  }

  // ✅ GET EXACTLY ONE KEY (TYPE SAFE)
  get<K extends keyof FlowKVState>(key: K): FlowKVState[K] {
    return this.state[key];
  }

  // ✅ GET FINAL API PAYLOAD
  getAll(): FlowKVState {
    return this.state;
  }

  // ✅ RESET ENTIRE FLOW (e.g. on logout / restart)
  reset(): void {
    this.state = { ...DEFAULT_STATE };
    console.log('♻️ [KV] Store reset');
  }
}
