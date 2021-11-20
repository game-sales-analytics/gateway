// package: coresrv
// file: coresrv.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as coresrv_pb from "./coresrv_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ICoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ping: ICoreServiceService_IPing;
    bulkStoreGameSales: ICoreServiceService_IBulkStoreGameSales;
    getGameSalesByRank: ICoreServiceService_IGetGameSalesByRank;
    searchGameSalesByName: ICoreServiceService_ISearchGameSalesByName;
    getTopNGamesOfPlatforms: ICoreServiceService_IGetTopNGamesOfPlatforms;
    getTopNGamesOfYear: ICoreServiceService_IGetTopNGamesOfYear;
    getTopNGamesOfGenre: ICoreServiceService_IGetTopNGamesOfGenre;
    get5MostSoldGamesByYearAndPlatform: ICoreServiceService_IGet5MostSoldGamesByYearAndPlatform;
    getGameSalesWithMoreSalesInEUThanNA: ICoreServiceService_IGetGameSalesWithMoreSalesInEUThanNA;
    getGameSalesInIds: ICoreServiceService_IGetGameSalesInIds;
    getYearlyTotalGameSalesInRange: ICoreServiceService_IGetYearlyTotalGameSalesInRange;
    getTotalPublishersGameSalesInYearsRange: ICoreServiceService_IGetTotalPublishersGameSalesInYearsRange;
    getTotalGameSalesInYearsRangeByGenre: ICoreServiceService_IGetTotalGameSalesInYearsRangeByGenre;
}

interface ICoreServiceService_IPing extends grpc.MethodDefinition<coresrv_pb.PingRequest, coresrv_pb.PingReply> {
    path: "/coresrv.CoreService/Ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.PingRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.PingRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.PingReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.PingReply>;
}
interface ICoreServiceService_IBulkStoreGameSales extends grpc.MethodDefinition<coresrv_pb.BulkStoreGameSalesRequest, coresrv_pb.BulkStoreGameSalesReply> {
    path: "/coresrv.CoreService/BulkStoreGameSales";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.BulkStoreGameSalesRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.BulkStoreGameSalesRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.BulkStoreGameSalesReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.BulkStoreGameSalesReply>;
}
interface ICoreServiceService_IGetGameSalesByRank extends grpc.MethodDefinition<coresrv_pb.GetGameSalesByRankRequest, coresrv_pb.GetGameSalesByRankReply> {
    path: "/coresrv.CoreService/GetGameSalesByRank";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetGameSalesByRankRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetGameSalesByRankRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetGameSalesByRankReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetGameSalesByRankReply>;
}
interface ICoreServiceService_ISearchGameSalesByName extends grpc.MethodDefinition<coresrv_pb.SearchGameSalesByNameRequest, coresrv_pb.SearchGameSalesByNameReply> {
    path: "/coresrv.CoreService/SearchGameSalesByName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.SearchGameSalesByNameRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.SearchGameSalesByNameRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.SearchGameSalesByNameReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.SearchGameSalesByNameReply>;
}
interface ICoreServiceService_IGetTopNGamesOfPlatforms extends grpc.MethodDefinition<coresrv_pb.GetTopNGamesOfPlatformsRequest, coresrv_pb.GetTopNGamesOfPlatformsReply> {
    path: "/coresrv.CoreService/GetTopNGamesOfPlatforms";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetTopNGamesOfPlatformsRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetTopNGamesOfPlatformsRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetTopNGamesOfPlatformsReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetTopNGamesOfPlatformsReply>;
}
interface ICoreServiceService_IGetTopNGamesOfYear extends grpc.MethodDefinition<coresrv_pb.GetTopNGamesOfYearRequest, coresrv_pb.GetTopNGamesOfYearReply> {
    path: "/coresrv.CoreService/GetTopNGamesOfYear";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetTopNGamesOfYearRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetTopNGamesOfYearRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetTopNGamesOfYearReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetTopNGamesOfYearReply>;
}
interface ICoreServiceService_IGetTopNGamesOfGenre extends grpc.MethodDefinition<coresrv_pb.GetTopNGamesOfGenreRequest, coresrv_pb.GetTopNGamesOfGenreReply> {
    path: "/coresrv.CoreService/GetTopNGamesOfGenre";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetTopNGamesOfGenreRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetTopNGamesOfGenreRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetTopNGamesOfGenreReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetTopNGamesOfGenreReply>;
}
interface ICoreServiceService_IGet5MostSoldGamesByYearAndPlatform extends grpc.MethodDefinition<coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest, coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply> {
    path: "/coresrv.CoreService/Get5MostSoldGamesByYearAndPlatform";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply>;
}
interface ICoreServiceService_IGetGameSalesWithMoreSalesInEUThanNA extends grpc.MethodDefinition<coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest, coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply> {
    path: "/coresrv.CoreService/GetGameSalesWithMoreSalesInEUThanNA";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply>;
}
interface ICoreServiceService_IGetGameSalesInIds extends grpc.MethodDefinition<coresrv_pb.GetGameSalesInIdsRequest, coresrv_pb.GetGameSalesInIdsReply> {
    path: "/coresrv.CoreService/GetGameSalesInIds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetGameSalesInIdsRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetGameSalesInIdsRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetGameSalesInIdsReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetGameSalesInIdsReply>;
}
interface ICoreServiceService_IGetYearlyTotalGameSalesInRange extends grpc.MethodDefinition<coresrv_pb.GetYearlyTotalGameSalesInRangeRequest, coresrv_pb.GetYearlyTotalGameSalesInRangeReply> {
    path: "/coresrv.CoreService/GetYearlyTotalGameSalesInRange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetYearlyTotalGameSalesInRangeRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetYearlyTotalGameSalesInRangeRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetYearlyTotalGameSalesInRangeReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetYearlyTotalGameSalesInRangeReply>;
}
interface ICoreServiceService_IGetTotalPublishersGameSalesInYearsRange extends grpc.MethodDefinition<coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest, coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply> {
    path: "/coresrv.CoreService/GetTotalPublishersGameSalesInYearsRange";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply>;
}
interface ICoreServiceService_IGetTotalGameSalesInYearsRangeByGenre extends grpc.MethodDefinition<coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest, coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply> {
    path: "/coresrv.CoreService/GetTotalGameSalesInYearsRangeByGenre";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest>;
    requestDeserialize: grpc.deserialize<coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest>;
    responseSerialize: grpc.serialize<coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply>;
    responseDeserialize: grpc.deserialize<coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply>;
}

export const CoreServiceService: ICoreServiceService;

export interface ICoreServiceServer extends grpc.UntypedServiceImplementation {
    ping: grpc.handleUnaryCall<coresrv_pb.PingRequest, coresrv_pb.PingReply>;
    bulkStoreGameSales: grpc.handleUnaryCall<coresrv_pb.BulkStoreGameSalesRequest, coresrv_pb.BulkStoreGameSalesReply>;
    getGameSalesByRank: grpc.handleUnaryCall<coresrv_pb.GetGameSalesByRankRequest, coresrv_pb.GetGameSalesByRankReply>;
    searchGameSalesByName: grpc.handleUnaryCall<coresrv_pb.SearchGameSalesByNameRequest, coresrv_pb.SearchGameSalesByNameReply>;
    getTopNGamesOfPlatforms: grpc.handleUnaryCall<coresrv_pb.GetTopNGamesOfPlatformsRequest, coresrv_pb.GetTopNGamesOfPlatformsReply>;
    getTopNGamesOfYear: grpc.handleUnaryCall<coresrv_pb.GetTopNGamesOfYearRequest, coresrv_pb.GetTopNGamesOfYearReply>;
    getTopNGamesOfGenre: grpc.handleUnaryCall<coresrv_pb.GetTopNGamesOfGenreRequest, coresrv_pb.GetTopNGamesOfGenreReply>;
    get5MostSoldGamesByYearAndPlatform: grpc.handleUnaryCall<coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest, coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply>;
    getGameSalesWithMoreSalesInEUThanNA: grpc.handleUnaryCall<coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest, coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply>;
    getGameSalesInIds: grpc.handleUnaryCall<coresrv_pb.GetGameSalesInIdsRequest, coresrv_pb.GetGameSalesInIdsReply>;
    getYearlyTotalGameSalesInRange: grpc.handleUnaryCall<coresrv_pb.GetYearlyTotalGameSalesInRangeRequest, coresrv_pb.GetYearlyTotalGameSalesInRangeReply>;
    getTotalPublishersGameSalesInYearsRange: grpc.handleUnaryCall<coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest, coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply>;
    getTotalGameSalesInYearsRangeByGenre: grpc.handleUnaryCall<coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest, coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply>;
}

export interface ICoreServiceClient {
    ping(request: coresrv_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    ping(request: coresrv_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    ping(request: coresrv_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    bulkStoreGameSales(request: coresrv_pb.BulkStoreGameSalesRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.BulkStoreGameSalesReply) => void): grpc.ClientUnaryCall;
    bulkStoreGameSales(request: coresrv_pb.BulkStoreGameSalesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.BulkStoreGameSalesReply) => void): grpc.ClientUnaryCall;
    bulkStoreGameSales(request: coresrv_pb.BulkStoreGameSalesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.BulkStoreGameSalesReply) => void): grpc.ClientUnaryCall;
    getGameSalesByRank(request: coresrv_pb.GetGameSalesByRankRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesByRankReply) => void): grpc.ClientUnaryCall;
    getGameSalesByRank(request: coresrv_pb.GetGameSalesByRankRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesByRankReply) => void): grpc.ClientUnaryCall;
    getGameSalesByRank(request: coresrv_pb.GetGameSalesByRankRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesByRankReply) => void): grpc.ClientUnaryCall;
    searchGameSalesByName(request: coresrv_pb.SearchGameSalesByNameRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.SearchGameSalesByNameReply) => void): grpc.ClientUnaryCall;
    searchGameSalesByName(request: coresrv_pb.SearchGameSalesByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.SearchGameSalesByNameReply) => void): grpc.ClientUnaryCall;
    searchGameSalesByName(request: coresrv_pb.SearchGameSalesByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.SearchGameSalesByNameReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfPlatforms(request: coresrv_pb.GetTopNGamesOfPlatformsRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfPlatformsReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfPlatforms(request: coresrv_pb.GetTopNGamesOfPlatformsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfPlatformsReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfPlatforms(request: coresrv_pb.GetTopNGamesOfPlatformsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfPlatformsReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfYear(request: coresrv_pb.GetTopNGamesOfYearRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfYearReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfYear(request: coresrv_pb.GetTopNGamesOfYearRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfYearReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfYear(request: coresrv_pb.GetTopNGamesOfYearRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfYearReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfGenre(request: coresrv_pb.GetTopNGamesOfGenreRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfGenreReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfGenre(request: coresrv_pb.GetTopNGamesOfGenreRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfGenreReply) => void): grpc.ClientUnaryCall;
    getTopNGamesOfGenre(request: coresrv_pb.GetTopNGamesOfGenreRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfGenreReply) => void): grpc.ClientUnaryCall;
    get5MostSoldGamesByYearAndPlatform(request: coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply) => void): grpc.ClientUnaryCall;
    get5MostSoldGamesByYearAndPlatform(request: coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply) => void): grpc.ClientUnaryCall;
    get5MostSoldGamesByYearAndPlatform(request: coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply) => void): grpc.ClientUnaryCall;
    getGameSalesWithMoreSalesInEUThanNA(request: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply) => void): grpc.ClientUnaryCall;
    getGameSalesWithMoreSalesInEUThanNA(request: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply) => void): grpc.ClientUnaryCall;
    getGameSalesWithMoreSalesInEUThanNA(request: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply) => void): grpc.ClientUnaryCall;
    getGameSalesInIds(request: coresrv_pb.GetGameSalesInIdsRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesInIdsReply) => void): grpc.ClientUnaryCall;
    getGameSalesInIds(request: coresrv_pb.GetGameSalesInIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesInIdsReply) => void): grpc.ClientUnaryCall;
    getGameSalesInIds(request: coresrv_pb.GetGameSalesInIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesInIdsReply) => void): grpc.ClientUnaryCall;
    getYearlyTotalGameSalesInRange(request: coresrv_pb.GetYearlyTotalGameSalesInRangeRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetYearlyTotalGameSalesInRangeReply) => void): grpc.ClientUnaryCall;
    getYearlyTotalGameSalesInRange(request: coresrv_pb.GetYearlyTotalGameSalesInRangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetYearlyTotalGameSalesInRangeReply) => void): grpc.ClientUnaryCall;
    getYearlyTotalGameSalesInRange(request: coresrv_pb.GetYearlyTotalGameSalesInRangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetYearlyTotalGameSalesInRangeReply) => void): grpc.ClientUnaryCall;
    getTotalPublishersGameSalesInYearsRange(request: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply) => void): grpc.ClientUnaryCall;
    getTotalPublishersGameSalesInYearsRange(request: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply) => void): grpc.ClientUnaryCall;
    getTotalPublishersGameSalesInYearsRange(request: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply) => void): grpc.ClientUnaryCall;
    getTotalGameSalesInYearsRangeByGenre(request: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply) => void): grpc.ClientUnaryCall;
    getTotalGameSalesInYearsRangeByGenre(request: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply) => void): grpc.ClientUnaryCall;
    getTotalGameSalesInYearsRangeByGenre(request: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply) => void): grpc.ClientUnaryCall;
}

export class CoreServiceClient extends grpc.Client implements ICoreServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ping(request: coresrv_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    public ping(request: coresrv_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    public ping(request: coresrv_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    public bulkStoreGameSales(request: coresrv_pb.BulkStoreGameSalesRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.BulkStoreGameSalesReply) => void): grpc.ClientUnaryCall;
    public bulkStoreGameSales(request: coresrv_pb.BulkStoreGameSalesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.BulkStoreGameSalesReply) => void): grpc.ClientUnaryCall;
    public bulkStoreGameSales(request: coresrv_pb.BulkStoreGameSalesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.BulkStoreGameSalesReply) => void): grpc.ClientUnaryCall;
    public getGameSalesByRank(request: coresrv_pb.GetGameSalesByRankRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesByRankReply) => void): grpc.ClientUnaryCall;
    public getGameSalesByRank(request: coresrv_pb.GetGameSalesByRankRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesByRankReply) => void): grpc.ClientUnaryCall;
    public getGameSalesByRank(request: coresrv_pb.GetGameSalesByRankRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesByRankReply) => void): grpc.ClientUnaryCall;
    public searchGameSalesByName(request: coresrv_pb.SearchGameSalesByNameRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.SearchGameSalesByNameReply) => void): grpc.ClientUnaryCall;
    public searchGameSalesByName(request: coresrv_pb.SearchGameSalesByNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.SearchGameSalesByNameReply) => void): grpc.ClientUnaryCall;
    public searchGameSalesByName(request: coresrv_pb.SearchGameSalesByNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.SearchGameSalesByNameReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfPlatforms(request: coresrv_pb.GetTopNGamesOfPlatformsRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfPlatformsReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfPlatforms(request: coresrv_pb.GetTopNGamesOfPlatformsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfPlatformsReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfPlatforms(request: coresrv_pb.GetTopNGamesOfPlatformsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfPlatformsReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfYear(request: coresrv_pb.GetTopNGamesOfYearRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfYearReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfYear(request: coresrv_pb.GetTopNGamesOfYearRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfYearReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfYear(request: coresrv_pb.GetTopNGamesOfYearRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfYearReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfGenre(request: coresrv_pb.GetTopNGamesOfGenreRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfGenreReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfGenre(request: coresrv_pb.GetTopNGamesOfGenreRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfGenreReply) => void): grpc.ClientUnaryCall;
    public getTopNGamesOfGenre(request: coresrv_pb.GetTopNGamesOfGenreRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTopNGamesOfGenreReply) => void): grpc.ClientUnaryCall;
    public get5MostSoldGamesByYearAndPlatform(request: coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply) => void): grpc.ClientUnaryCall;
    public get5MostSoldGamesByYearAndPlatform(request: coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply) => void): grpc.ClientUnaryCall;
    public get5MostSoldGamesByYearAndPlatform(request: coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply) => void): grpc.ClientUnaryCall;
    public getGameSalesWithMoreSalesInEUThanNA(request: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply) => void): grpc.ClientUnaryCall;
    public getGameSalesWithMoreSalesInEUThanNA(request: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply) => void): grpc.ClientUnaryCall;
    public getGameSalesWithMoreSalesInEUThanNA(request: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply) => void): grpc.ClientUnaryCall;
    public getGameSalesInIds(request: coresrv_pb.GetGameSalesInIdsRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesInIdsReply) => void): grpc.ClientUnaryCall;
    public getGameSalesInIds(request: coresrv_pb.GetGameSalesInIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesInIdsReply) => void): grpc.ClientUnaryCall;
    public getGameSalesInIds(request: coresrv_pb.GetGameSalesInIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetGameSalesInIdsReply) => void): grpc.ClientUnaryCall;
    public getYearlyTotalGameSalesInRange(request: coresrv_pb.GetYearlyTotalGameSalesInRangeRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetYearlyTotalGameSalesInRangeReply) => void): grpc.ClientUnaryCall;
    public getYearlyTotalGameSalesInRange(request: coresrv_pb.GetYearlyTotalGameSalesInRangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetYearlyTotalGameSalesInRangeReply) => void): grpc.ClientUnaryCall;
    public getYearlyTotalGameSalesInRange(request: coresrv_pb.GetYearlyTotalGameSalesInRangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetYearlyTotalGameSalesInRangeReply) => void): grpc.ClientUnaryCall;
    public getTotalPublishersGameSalesInYearsRange(request: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply) => void): grpc.ClientUnaryCall;
    public getTotalPublishersGameSalesInYearsRange(request: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply) => void): grpc.ClientUnaryCall;
    public getTotalPublishersGameSalesInYearsRange(request: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply) => void): grpc.ClientUnaryCall;
    public getTotalGameSalesInYearsRangeByGenre(request: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply) => void): grpc.ClientUnaryCall;
    public getTotalGameSalesInYearsRangeByGenre(request: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply) => void): grpc.ClientUnaryCall;
    public getTotalGameSalesInYearsRangeByGenre(request: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply) => void): grpc.ClientUnaryCall;
}
