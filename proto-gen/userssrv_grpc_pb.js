// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var userssrv_pb = require('./userssrv_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_userssrv_AuthenticateReply(arg) {
  if (!(arg instanceof userssrv_pb.AuthenticateReply)) {
    throw new Error('Expected argument of type userssrv.AuthenticateReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userssrv_AuthenticateReply(buffer_arg) {
  return userssrv_pb.AuthenticateReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userssrv_AuthenticateRequest(arg) {
  if (!(arg instanceof userssrv_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type userssrv.AuthenticateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userssrv_AuthenticateRequest(buffer_arg) {
  return userssrv_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userssrv_LoginWithEmailReply(arg) {
  if (!(arg instanceof userssrv_pb.LoginWithEmailReply)) {
    throw new Error('Expected argument of type userssrv.LoginWithEmailReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userssrv_LoginWithEmailReply(buffer_arg) {
  return userssrv_pb.LoginWithEmailReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userssrv_LoginWithEmailRequest(arg) {
  if (!(arg instanceof userssrv_pb.LoginWithEmailRequest)) {
    throw new Error('Expected argument of type userssrv.LoginWithEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userssrv_LoginWithEmailRequest(buffer_arg) {
  return userssrv_pb.LoginWithEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userssrv_PingReply(arg) {
  if (!(arg instanceof userssrv_pb.PingReply)) {
    throw new Error('Expected argument of type userssrv.PingReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userssrv_PingReply(buffer_arg) {
  return userssrv_pb.PingReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userssrv_PingRequest(arg) {
  if (!(arg instanceof userssrv_pb.PingRequest)) {
    throw new Error('Expected argument of type userssrv.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userssrv_PingRequest(buffer_arg) {
  return userssrv_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userssrv_RegisterReply(arg) {
  if (!(arg instanceof userssrv_pb.RegisterReply)) {
    throw new Error('Expected argument of type userssrv.RegisterReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userssrv_RegisterReply(buffer_arg) {
  return userssrv_pb.RegisterReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userssrv_RegisterRequest(arg) {
  if (!(arg instanceof userssrv_pb.RegisterRequest)) {
    throw new Error('Expected argument of type userssrv.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userssrv_RegisterRequest(buffer_arg) {
  return userssrv_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersServiceService = exports.UsersServiceService = {
  ping: {
    path: '/userssrv.UsersService/Ping',
    requestStream: false,
    responseStream: false,
    requestType: userssrv_pb.PingRequest,
    responseType: userssrv_pb.PingReply,
    requestSerialize: serialize_userssrv_PingRequest,
    requestDeserialize: deserialize_userssrv_PingRequest,
    responseSerialize: serialize_userssrv_PingReply,
    responseDeserialize: deserialize_userssrv_PingReply,
  },
  loginWithEmail: {
    path: '/userssrv.UsersService/LoginWithEmail',
    requestStream: false,
    responseStream: false,
    requestType: userssrv_pb.LoginWithEmailRequest,
    responseType: userssrv_pb.LoginWithEmailReply,
    requestSerialize: serialize_userssrv_LoginWithEmailRequest,
    requestDeserialize: deserialize_userssrv_LoginWithEmailRequest,
    responseSerialize: serialize_userssrv_LoginWithEmailReply,
    responseDeserialize: deserialize_userssrv_LoginWithEmailReply,
  },
  register: {
    path: '/userssrv.UsersService/Register',
    requestStream: false,
    responseStream: false,
    requestType: userssrv_pb.RegisterRequest,
    responseType: userssrv_pb.RegisterReply,
    requestSerialize: serialize_userssrv_RegisterRequest,
    requestDeserialize: deserialize_userssrv_RegisterRequest,
    responseSerialize: serialize_userssrv_RegisterReply,
    responseDeserialize: deserialize_userssrv_RegisterReply,
  },
  authenticate: {
    path: '/userssrv.UsersService/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: userssrv_pb.AuthenticateRequest,
    responseType: userssrv_pb.AuthenticateReply,
    requestSerialize: serialize_userssrv_AuthenticateRequest,
    requestDeserialize: deserialize_userssrv_AuthenticateRequest,
    responseSerialize: serialize_userssrv_AuthenticateReply,
    responseDeserialize: deserialize_userssrv_AuthenticateReply,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService);
