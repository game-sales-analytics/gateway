// package: userssrv
// file: userssrv.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as userssrv_pb from "./userssrv_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IUsersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ping: IUsersServiceService_IPing;
    loginWithEmail: IUsersServiceService_ILoginWithEmail;
    register: IUsersServiceService_IRegister;
    authenticate: IUsersServiceService_IAuthenticate;
}

interface IUsersServiceService_IPing extends grpc.MethodDefinition<userssrv_pb.PingRequest, userssrv_pb.PingReply> {
    path: "/userssrv.UsersService/Ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<userssrv_pb.PingRequest>;
    requestDeserialize: grpc.deserialize<userssrv_pb.PingRequest>;
    responseSerialize: grpc.serialize<userssrv_pb.PingReply>;
    responseDeserialize: grpc.deserialize<userssrv_pb.PingReply>;
}
interface IUsersServiceService_ILoginWithEmail extends grpc.MethodDefinition<userssrv_pb.LoginWithEmailRequest, userssrv_pb.LoginWithEmailReply> {
    path: "/userssrv.UsersService/LoginWithEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<userssrv_pb.LoginWithEmailRequest>;
    requestDeserialize: grpc.deserialize<userssrv_pb.LoginWithEmailRequest>;
    responseSerialize: grpc.serialize<userssrv_pb.LoginWithEmailReply>;
    responseDeserialize: grpc.deserialize<userssrv_pb.LoginWithEmailReply>;
}
interface IUsersServiceService_IRegister extends grpc.MethodDefinition<userssrv_pb.RegisterRequest, userssrv_pb.RegisterReply> {
    path: "/userssrv.UsersService/Register";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<userssrv_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<userssrv_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<userssrv_pb.RegisterReply>;
    responseDeserialize: grpc.deserialize<userssrv_pb.RegisterReply>;
}
interface IUsersServiceService_IAuthenticate extends grpc.MethodDefinition<userssrv_pb.AuthenticateRequest, userssrv_pb.AuthenticateReply> {
    path: "/userssrv.UsersService/Authenticate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<userssrv_pb.AuthenticateRequest>;
    requestDeserialize: grpc.deserialize<userssrv_pb.AuthenticateRequest>;
    responseSerialize: grpc.serialize<userssrv_pb.AuthenticateReply>;
    responseDeserialize: grpc.deserialize<userssrv_pb.AuthenticateReply>;
}

export const UsersServiceService: IUsersServiceService;

export interface IUsersServiceServer extends grpc.UntypedServiceImplementation {
    ping: grpc.handleUnaryCall<userssrv_pb.PingRequest, userssrv_pb.PingReply>;
    loginWithEmail: grpc.handleUnaryCall<userssrv_pb.LoginWithEmailRequest, userssrv_pb.LoginWithEmailReply>;
    register: grpc.handleUnaryCall<userssrv_pb.RegisterRequest, userssrv_pb.RegisterReply>;
    authenticate: grpc.handleUnaryCall<userssrv_pb.AuthenticateRequest, userssrv_pb.AuthenticateReply>;
}

export interface IUsersServiceClient {
    ping(request: userssrv_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: userssrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    ping(request: userssrv_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userssrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    ping(request: userssrv_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userssrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    loginWithEmail(request: userssrv_pb.LoginWithEmailRequest, callback: (error: grpc.ServiceError | null, response: userssrv_pb.LoginWithEmailReply) => void): grpc.ClientUnaryCall;
    loginWithEmail(request: userssrv_pb.LoginWithEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userssrv_pb.LoginWithEmailReply) => void): grpc.ClientUnaryCall;
    loginWithEmail(request: userssrv_pb.LoginWithEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userssrv_pb.LoginWithEmailReply) => void): grpc.ClientUnaryCall;
    register(request: userssrv_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: userssrv_pb.RegisterReply) => void): grpc.ClientUnaryCall;
    register(request: userssrv_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userssrv_pb.RegisterReply) => void): grpc.ClientUnaryCall;
    register(request: userssrv_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userssrv_pb.RegisterReply) => void): grpc.ClientUnaryCall;
    authenticate(request: userssrv_pb.AuthenticateRequest, callback: (error: grpc.ServiceError | null, response: userssrv_pb.AuthenticateReply) => void): grpc.ClientUnaryCall;
    authenticate(request: userssrv_pb.AuthenticateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userssrv_pb.AuthenticateReply) => void): grpc.ClientUnaryCall;
    authenticate(request: userssrv_pb.AuthenticateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userssrv_pb.AuthenticateReply) => void): grpc.ClientUnaryCall;
}

export class UsersServiceClient extends grpc.Client implements IUsersServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ping(request: userssrv_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: userssrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    public ping(request: userssrv_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userssrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    public ping(request: userssrv_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userssrv_pb.PingReply) => void): grpc.ClientUnaryCall;
    public loginWithEmail(request: userssrv_pb.LoginWithEmailRequest, callback: (error: grpc.ServiceError | null, response: userssrv_pb.LoginWithEmailReply) => void): grpc.ClientUnaryCall;
    public loginWithEmail(request: userssrv_pb.LoginWithEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userssrv_pb.LoginWithEmailReply) => void): grpc.ClientUnaryCall;
    public loginWithEmail(request: userssrv_pb.LoginWithEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userssrv_pb.LoginWithEmailReply) => void): grpc.ClientUnaryCall;
    public register(request: userssrv_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: userssrv_pb.RegisterReply) => void): grpc.ClientUnaryCall;
    public register(request: userssrv_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userssrv_pb.RegisterReply) => void): grpc.ClientUnaryCall;
    public register(request: userssrv_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userssrv_pb.RegisterReply) => void): grpc.ClientUnaryCall;
    public authenticate(request: userssrv_pb.AuthenticateRequest, callback: (error: grpc.ServiceError | null, response: userssrv_pb.AuthenticateReply) => void): grpc.ClientUnaryCall;
    public authenticate(request: userssrv_pb.AuthenticateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userssrv_pb.AuthenticateReply) => void): grpc.ClientUnaryCall;
    public authenticate(request: userssrv_pb.AuthenticateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userssrv_pb.AuthenticateReply) => void): grpc.ClientUnaryCall;
}
