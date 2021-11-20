// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var coresrv_pb = require('./coresrv_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_coresrv_BulkStoreGameSalesReply(arg) {
  if (!(arg instanceof coresrv_pb.BulkStoreGameSalesReply)) {
    throw new Error('Expected argument of type coresrv.BulkStoreGameSalesReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_BulkStoreGameSalesReply(buffer_arg) {
  return coresrv_pb.BulkStoreGameSalesReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_BulkStoreGameSalesRequest(arg) {
  if (!(arg instanceof coresrv_pb.BulkStoreGameSalesRequest)) {
    throw new Error('Expected argument of type coresrv.BulkStoreGameSalesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_BulkStoreGameSalesRequest(buffer_arg) {
  return coresrv_pb.BulkStoreGameSalesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_Get5MostSoldGamesByYearAndPlatformReply(arg) {
  if (!(arg instanceof coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply)) {
    throw new Error('Expected argument of type coresrv.Get5MostSoldGamesByYearAndPlatformReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_Get5MostSoldGamesByYearAndPlatformReply(buffer_arg) {
  return coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_Get5MostSoldGamesByYearAndPlatformRequest(arg) {
  if (!(arg instanceof coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest)) {
    throw new Error('Expected argument of type coresrv.Get5MostSoldGamesByYearAndPlatformRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_Get5MostSoldGamesByYearAndPlatformRequest(buffer_arg) {
  return coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetGameSalesByRankReply(arg) {
  if (!(arg instanceof coresrv_pb.GetGameSalesByRankReply)) {
    throw new Error('Expected argument of type coresrv.GetGameSalesByRankReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetGameSalesByRankReply(buffer_arg) {
  return coresrv_pb.GetGameSalesByRankReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetGameSalesByRankRequest(arg) {
  if (!(arg instanceof coresrv_pb.GetGameSalesByRankRequest)) {
    throw new Error('Expected argument of type coresrv.GetGameSalesByRankRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetGameSalesByRankRequest(buffer_arg) {
  return coresrv_pb.GetGameSalesByRankRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetGameSalesInIdsReply(arg) {
  if (!(arg instanceof coresrv_pb.GetGameSalesInIdsReply)) {
    throw new Error('Expected argument of type coresrv.GetGameSalesInIdsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetGameSalesInIdsReply(buffer_arg) {
  return coresrv_pb.GetGameSalesInIdsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetGameSalesInIdsRequest(arg) {
  if (!(arg instanceof coresrv_pb.GetGameSalesInIdsRequest)) {
    throw new Error('Expected argument of type coresrv.GetGameSalesInIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetGameSalesInIdsRequest(buffer_arg) {
  return coresrv_pb.GetGameSalesInIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetGameSalesWithMoreSalesInEUThanNAReply(arg) {
  if (!(arg instanceof coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply)) {
    throw new Error('Expected argument of type coresrv.GetGameSalesWithMoreSalesInEUThanNAReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetGameSalesWithMoreSalesInEUThanNAReply(buffer_arg) {
  return coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetGameSalesWithMoreSalesInEUThanNARequest(arg) {
  if (!(arg instanceof coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest)) {
    throw new Error('Expected argument of type coresrv.GetGameSalesWithMoreSalesInEUThanNARequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetGameSalesWithMoreSalesInEUThanNARequest(buffer_arg) {
  return coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTopNGamesOfGenreReply(arg) {
  if (!(arg instanceof coresrv_pb.GetTopNGamesOfGenreReply)) {
    throw new Error('Expected argument of type coresrv.GetTopNGamesOfGenreReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTopNGamesOfGenreReply(buffer_arg) {
  return coresrv_pb.GetTopNGamesOfGenreReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTopNGamesOfGenreRequest(arg) {
  if (!(arg instanceof coresrv_pb.GetTopNGamesOfGenreRequest)) {
    throw new Error('Expected argument of type coresrv.GetTopNGamesOfGenreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTopNGamesOfGenreRequest(buffer_arg) {
  return coresrv_pb.GetTopNGamesOfGenreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTopNGamesOfPlatformsReply(arg) {
  if (!(arg instanceof coresrv_pb.GetTopNGamesOfPlatformsReply)) {
    throw new Error('Expected argument of type coresrv.GetTopNGamesOfPlatformsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTopNGamesOfPlatformsReply(buffer_arg) {
  return coresrv_pb.GetTopNGamesOfPlatformsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTopNGamesOfPlatformsRequest(arg) {
  if (!(arg instanceof coresrv_pb.GetTopNGamesOfPlatformsRequest)) {
    throw new Error('Expected argument of type coresrv.GetTopNGamesOfPlatformsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTopNGamesOfPlatformsRequest(buffer_arg) {
  return coresrv_pb.GetTopNGamesOfPlatformsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTopNGamesOfYearReply(arg) {
  if (!(arg instanceof coresrv_pb.GetTopNGamesOfYearReply)) {
    throw new Error('Expected argument of type coresrv.GetTopNGamesOfYearReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTopNGamesOfYearReply(buffer_arg) {
  return coresrv_pb.GetTopNGamesOfYearReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTopNGamesOfYearRequest(arg) {
  if (!(arg instanceof coresrv_pb.GetTopNGamesOfYearRequest)) {
    throw new Error('Expected argument of type coresrv.GetTopNGamesOfYearRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTopNGamesOfYearRequest(buffer_arg) {
  return coresrv_pb.GetTopNGamesOfYearRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTotalGameSalesInYearsRangeByGenreReply(arg) {
  if (!(arg instanceof coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply)) {
    throw new Error('Expected argument of type coresrv.GetTotalGameSalesInYearsRangeByGenreReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTotalGameSalesInYearsRangeByGenreReply(buffer_arg) {
  return coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTotalGameSalesInYearsRangeByGenreRequest(arg) {
  if (!(arg instanceof coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest)) {
    throw new Error('Expected argument of type coresrv.GetTotalGameSalesInYearsRangeByGenreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTotalGameSalesInYearsRangeByGenreRequest(buffer_arg) {
  return coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTotalPublishersGameSalesInYearsRangeReply(arg) {
  if (!(arg instanceof coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply)) {
    throw new Error('Expected argument of type coresrv.GetTotalPublishersGameSalesInYearsRangeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTotalPublishersGameSalesInYearsRangeReply(buffer_arg) {
  return coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetTotalPublishersGameSalesInYearsRangeRequest(arg) {
  if (!(arg instanceof coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest)) {
    throw new Error('Expected argument of type coresrv.GetTotalPublishersGameSalesInYearsRangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetTotalPublishersGameSalesInYearsRangeRequest(buffer_arg) {
  return coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetYearlyTotalGameSalesInRangeReply(arg) {
  if (!(arg instanceof coresrv_pb.GetYearlyTotalGameSalesInRangeReply)) {
    throw new Error('Expected argument of type coresrv.GetYearlyTotalGameSalesInRangeReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetYearlyTotalGameSalesInRangeReply(buffer_arg) {
  return coresrv_pb.GetYearlyTotalGameSalesInRangeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_GetYearlyTotalGameSalesInRangeRequest(arg) {
  if (!(arg instanceof coresrv_pb.GetYearlyTotalGameSalesInRangeRequest)) {
    throw new Error('Expected argument of type coresrv.GetYearlyTotalGameSalesInRangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_GetYearlyTotalGameSalesInRangeRequest(buffer_arg) {
  return coresrv_pb.GetYearlyTotalGameSalesInRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_PingReply(arg) {
  if (!(arg instanceof coresrv_pb.PingReply)) {
    throw new Error('Expected argument of type coresrv.PingReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_PingReply(buffer_arg) {
  return coresrv_pb.PingReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_PingRequest(arg) {
  if (!(arg instanceof coresrv_pb.PingRequest)) {
    throw new Error('Expected argument of type coresrv.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_PingRequest(buffer_arg) {
  return coresrv_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_SearchGameSalesByNameReply(arg) {
  if (!(arg instanceof coresrv_pb.SearchGameSalesByNameReply)) {
    throw new Error('Expected argument of type coresrv.SearchGameSalesByNameReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_SearchGameSalesByNameReply(buffer_arg) {
  return coresrv_pb.SearchGameSalesByNameReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_coresrv_SearchGameSalesByNameRequest(arg) {
  if (!(arg instanceof coresrv_pb.SearchGameSalesByNameRequest)) {
    throw new Error('Expected argument of type coresrv.SearchGameSalesByNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_coresrv_SearchGameSalesByNameRequest(buffer_arg) {
  return coresrv_pb.SearchGameSalesByNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CoreServiceService = exports.CoreServiceService = {
  ping: {
    path: '/coresrv.CoreService/Ping',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.PingRequest,
    responseType: coresrv_pb.PingReply,
    requestSerialize: serialize_coresrv_PingRequest,
    requestDeserialize: deserialize_coresrv_PingRequest,
    responseSerialize: serialize_coresrv_PingReply,
    responseDeserialize: deserialize_coresrv_PingReply,
  },
  bulkStoreGameSales: {
    path: '/coresrv.CoreService/BulkStoreGameSales',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.BulkStoreGameSalesRequest,
    responseType: coresrv_pb.BulkStoreGameSalesReply,
    requestSerialize: serialize_coresrv_BulkStoreGameSalesRequest,
    requestDeserialize: deserialize_coresrv_BulkStoreGameSalesRequest,
    responseSerialize: serialize_coresrv_BulkStoreGameSalesReply,
    responseDeserialize: deserialize_coresrv_BulkStoreGameSalesReply,
  },
  getGameSalesByRank: {
    path: '/coresrv.CoreService/GetGameSalesByRank',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetGameSalesByRankRequest,
    responseType: coresrv_pb.GetGameSalesByRankReply,
    requestSerialize: serialize_coresrv_GetGameSalesByRankRequest,
    requestDeserialize: deserialize_coresrv_GetGameSalesByRankRequest,
    responseSerialize: serialize_coresrv_GetGameSalesByRankReply,
    responseDeserialize: deserialize_coresrv_GetGameSalesByRankReply,
  },
  searchGameSalesByName: {
    path: '/coresrv.CoreService/SearchGameSalesByName',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.SearchGameSalesByNameRequest,
    responseType: coresrv_pb.SearchGameSalesByNameReply,
    requestSerialize: serialize_coresrv_SearchGameSalesByNameRequest,
    requestDeserialize: deserialize_coresrv_SearchGameSalesByNameRequest,
    responseSerialize: serialize_coresrv_SearchGameSalesByNameReply,
    responseDeserialize: deserialize_coresrv_SearchGameSalesByNameReply,
  },
  getTopNGamesOfPlatforms: {
    path: '/coresrv.CoreService/GetTopNGamesOfPlatforms',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetTopNGamesOfPlatformsRequest,
    responseType: coresrv_pb.GetTopNGamesOfPlatformsReply,
    requestSerialize: serialize_coresrv_GetTopNGamesOfPlatformsRequest,
    requestDeserialize: deserialize_coresrv_GetTopNGamesOfPlatformsRequest,
    responseSerialize: serialize_coresrv_GetTopNGamesOfPlatformsReply,
    responseDeserialize: deserialize_coresrv_GetTopNGamesOfPlatformsReply,
  },
  getTopNGamesOfYear: {
    path: '/coresrv.CoreService/GetTopNGamesOfYear',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetTopNGamesOfYearRequest,
    responseType: coresrv_pb.GetTopNGamesOfYearReply,
    requestSerialize: serialize_coresrv_GetTopNGamesOfYearRequest,
    requestDeserialize: deserialize_coresrv_GetTopNGamesOfYearRequest,
    responseSerialize: serialize_coresrv_GetTopNGamesOfYearReply,
    responseDeserialize: deserialize_coresrv_GetTopNGamesOfYearReply,
  },
  getTopNGamesOfGenre: {
    path: '/coresrv.CoreService/GetTopNGamesOfGenre',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetTopNGamesOfGenreRequest,
    responseType: coresrv_pb.GetTopNGamesOfGenreReply,
    requestSerialize: serialize_coresrv_GetTopNGamesOfGenreRequest,
    requestDeserialize: deserialize_coresrv_GetTopNGamesOfGenreRequest,
    responseSerialize: serialize_coresrv_GetTopNGamesOfGenreReply,
    responseDeserialize: deserialize_coresrv_GetTopNGamesOfGenreReply,
  },
  get5MostSoldGamesByYearAndPlatform: {
    path: '/coresrv.CoreService/Get5MostSoldGamesByYearAndPlatform',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.Get5MostSoldGamesByYearAndPlatformRequest,
    responseType: coresrv_pb.Get5MostSoldGamesByYearAndPlatformReply,
    requestSerialize: serialize_coresrv_Get5MostSoldGamesByYearAndPlatformRequest,
    requestDeserialize: deserialize_coresrv_Get5MostSoldGamesByYearAndPlatformRequest,
    responseSerialize: serialize_coresrv_Get5MostSoldGamesByYearAndPlatformReply,
    responseDeserialize: deserialize_coresrv_Get5MostSoldGamesByYearAndPlatformReply,
  },
  getGameSalesWithMoreSalesInEUThanNA: {
    path: '/coresrv.CoreService/GetGameSalesWithMoreSalesInEUThanNA',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNARequest,
    responseType: coresrv_pb.GetGameSalesWithMoreSalesInEUThanNAReply,
    requestSerialize: serialize_coresrv_GetGameSalesWithMoreSalesInEUThanNARequest,
    requestDeserialize: deserialize_coresrv_GetGameSalesWithMoreSalesInEUThanNARequest,
    responseSerialize: serialize_coresrv_GetGameSalesWithMoreSalesInEUThanNAReply,
    responseDeserialize: deserialize_coresrv_GetGameSalesWithMoreSalesInEUThanNAReply,
  },
  getGameSalesInIds: {
    path: '/coresrv.CoreService/GetGameSalesInIds',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetGameSalesInIdsRequest,
    responseType: coresrv_pb.GetGameSalesInIdsReply,
    requestSerialize: serialize_coresrv_GetGameSalesInIdsRequest,
    requestDeserialize: deserialize_coresrv_GetGameSalesInIdsRequest,
    responseSerialize: serialize_coresrv_GetGameSalesInIdsReply,
    responseDeserialize: deserialize_coresrv_GetGameSalesInIdsReply,
  },
  getYearlyTotalGameSalesInRange: {
    path: '/coresrv.CoreService/GetYearlyTotalGameSalesInRange',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetYearlyTotalGameSalesInRangeRequest,
    responseType: coresrv_pb.GetYearlyTotalGameSalesInRangeReply,
    requestSerialize: serialize_coresrv_GetYearlyTotalGameSalesInRangeRequest,
    requestDeserialize: deserialize_coresrv_GetYearlyTotalGameSalesInRangeRequest,
    responseSerialize: serialize_coresrv_GetYearlyTotalGameSalesInRangeReply,
    responseDeserialize: deserialize_coresrv_GetYearlyTotalGameSalesInRangeReply,
  },
  getTotalPublishersGameSalesInYearsRange: {
    path: '/coresrv.CoreService/GetTotalPublishersGameSalesInYearsRange',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeRequest,
    responseType: coresrv_pb.GetTotalPublishersGameSalesInYearsRangeReply,
    requestSerialize: serialize_coresrv_GetTotalPublishersGameSalesInYearsRangeRequest,
    requestDeserialize: deserialize_coresrv_GetTotalPublishersGameSalesInYearsRangeRequest,
    responseSerialize: serialize_coresrv_GetTotalPublishersGameSalesInYearsRangeReply,
    responseDeserialize: deserialize_coresrv_GetTotalPublishersGameSalesInYearsRangeReply,
  },
  getTotalGameSalesInYearsRangeByGenre: {
    path: '/coresrv.CoreService/GetTotalGameSalesInYearsRangeByGenre',
    requestStream: false,
    responseStream: false,
    requestType: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreRequest,
    responseType: coresrv_pb.GetTotalGameSalesInYearsRangeByGenreReply,
    requestSerialize: serialize_coresrv_GetTotalGameSalesInYearsRangeByGenreRequest,
    requestDeserialize: deserialize_coresrv_GetTotalGameSalesInYearsRangeByGenreRequest,
    responseSerialize: serialize_coresrv_GetTotalGameSalesInYearsRangeByGenreReply,
    responseDeserialize: deserialize_coresrv_GetTotalGameSalesInYearsRangeByGenreReply,
  },
};

exports.CoreServiceClient = grpc.makeGenericClientConstructor(CoreServiceService);
