/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as gap from "gap/admin/lib/useGapFetch"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

export enum Environment {

  Staging = "Staging",

  Production = "Production",

}

export enum DataSource {

  DataCentre = "DataCentre",

  Cloud = "Cloud",

}

export enum LogEntryLevel {

  DEBUG = "DEBUG",

  INFO = "INFO",

  WARN = "WARN",

  ERROR = "ERROR",

}

export type LogEntryStackTraceException = {

  type?: string

  message?: string

}

export type LogEntryStackTraceMethod = {

  identifier?: string

  file?: string

  line?: string

}

export type LogEntryStackTrace = {

  exception?: LogEntryStackTraceException

  lines?: LogEntryStackTraceMethod[]

}


type BaseLogEntry = {

  hostname?: string

  level?: LogEntryLevel

  elapsed?: number

  timestamp?: number

  env?: Environment

  hasStackTrace?: boolean

  message?: string

  tags?: string[]

  stackTraces?: LogEntryStackTrace[]

}

export type LogEntry = BaseLogEntry
  & OneOf<{ application: string,service: string, }>


type BaseLogStream = {

}

export type LogStream = BaseLogStream
  & OneOf<{ dataCentre: DataCentreLogEntries,cloud: CloudLogEntries, }>

export type DataCentreLogEntries = {

  logs?: LogEntry[]

}

export type CloudLogEntries = {

  logs?: LogEntry[]

}


type BaseFetchLogRequest = {

  source?: DataSource

}

export type FetchLogRequest = BaseFetchLogRequest
  & OneOf<{ application: string,service: string, }>

export type FetchLogResponse = {

  result?: LogStream

}

export type PushLogRequest = {

  entry?: LogEntry

  source?: DataSource

}

export type PushLogResponse = {

  success?: boolean

}

export class LogService {
  
  static FetchLog(req: FetchLogRequest): Promise<gap.FetchState<FetchLogResponse>> {
    return gap.gapFetchGRPC<FetchLogRequest, FetchLogResponse>("/com.squareup.cash.gap.LogService/FetchLog", req)
  }
  
  static StreamLog(req: FetchLogRequest): Promise<gap.FetchState<FetchLogResponse>> {
    return gap.gapFetchGRPC<FetchLogRequest, FetchLogResponse>("/com.squareup.cash.gap.LogService/StreamLog", req)
  }
  
  static PushLog(req: PushLogRequest): Promise<gap.FetchState<PushLogResponse>> {
    return gap.gapFetchGRPC<PushLogRequest, PushLogResponse>("/com.squareup.cash.gap.LogService/PushLog", req)
  }

}