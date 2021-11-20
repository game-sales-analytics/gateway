// package: userssrv
// file: userssrv.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class PingRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingRequest;
    static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
    export type AsObject = {
    }
}

export class PingReply extends jspb.Message { 
    getPong(): boolean;
    setPong(value: boolean): PingReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PingReply.AsObject;
    static toObject(includeInstance: boolean, msg: PingReply): PingReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PingReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PingReply;
    static deserializeBinaryFromReader(message: PingReply, reader: jspb.BinaryReader): PingReply;
}

export namespace PingReply {
    export type AsObject = {
        pong: boolean,
    }
}

export class LoginWithEmailRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginWithEmailRequest;
    getPassword(): string;
    setPassword(value: string): LoginWithEmailRequest;
    getIp(): string;
    setIp(value: string): LoginWithEmailRequest;
    getDeviceUserAgent(): string;
    setDeviceUserAgent(value: string): LoginWithEmailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginWithEmailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginWithEmailRequest): LoginWithEmailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginWithEmailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginWithEmailRequest;
    static deserializeBinaryFromReader(message: LoginWithEmailRequest, reader: jspb.BinaryReader): LoginWithEmailRequest;
}

export namespace LoginWithEmailRequest {
    export type AsObject = {
        email: string,
        password: string,
        ip: string,
        deviceUserAgent: string,
    }
}

export class LoginWithEmailReply extends jspb.Message { 

    hasAuthToken(): boolean;
    clearAuthToken(): void;
    getAuthToken(): LoginWithEmailReply.AuthToken | undefined;
    setAuthToken(value?: LoginWithEmailReply.AuthToken): LoginWithEmailReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginWithEmailReply.AsObject;
    static toObject(includeInstance: boolean, msg: LoginWithEmailReply): LoginWithEmailReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginWithEmailReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginWithEmailReply;
    static deserializeBinaryFromReader(message: LoginWithEmailReply, reader: jspb.BinaryReader): LoginWithEmailReply;
}

export namespace LoginWithEmailReply {
    export type AsObject = {
        authToken?: LoginWithEmailReply.AuthToken.AsObject,
    }


    export class AuthToken extends jspb.Message { 
        getId(): string;
        setId(value: string): AuthToken;
        getToken(): string;
        setToken(value: string): AuthToken;

        hasNotBeforeDateTime(): boolean;
        clearNotBeforeDateTime(): void;
        getNotBeforeDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setNotBeforeDateTime(value?: google_protobuf_timestamp_pb.Timestamp): AuthToken;

        hasExpirationDateTime(): boolean;
        clearExpirationDateTime(): void;
        getExpirationDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setExpirationDateTime(value?: google_protobuf_timestamp_pb.Timestamp): AuthToken;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AuthToken.AsObject;
        static toObject(includeInstance: boolean, msg: AuthToken): AuthToken.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AuthToken, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AuthToken;
        static deserializeBinaryFromReader(message: AuthToken, reader: jspb.BinaryReader): AuthToken;
    }

    export namespace AuthToken {
        export type AsObject = {
            id: string,
            token: string,
            notBeforeDateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            expirationDateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}

export class RegisterRequest extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): RegisterRequest;
    getLastName(): string;
    setLastName(value: string): RegisterRequest;
    getEmail(): string;
    setEmail(value: string): RegisterRequest;
    getPassword(): string;
    setPassword(value: string): RegisterRequest;
    getPasswordConfirmation(): string;
    setPasswordConfirmation(value: string): RegisterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterRequest;
    static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
    export type AsObject = {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        passwordConfirmation: string,
    }
}

export class RegisterReply extends jspb.Message { 

    hasRegisteredUser(): boolean;
    clearRegisteredUser(): void;
    getRegisteredUser(): RegisterReply.RegisteredUser | undefined;
    setRegisteredUser(value?: RegisterReply.RegisteredUser): RegisterReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterReply.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterReply): RegisterReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterReply;
    static deserializeBinaryFromReader(message: RegisterReply, reader: jspb.BinaryReader): RegisterReply;
}

export namespace RegisterReply {
    export type AsObject = {
        registeredUser?: RegisterReply.RegisteredUser.AsObject,
    }


    export class RegisteredUser extends jspb.Message { 
        getId(): string;
        setId(value: string): RegisteredUser;
        getFirstName(): string;
        setFirstName(value: string): RegisteredUser;
        getLastName(): string;
        setLastName(value: string): RegisteredUser;
        getEmail(): string;
        setEmail(value: string): RegisteredUser;

        hasRegisteredAt(): boolean;
        clearRegisteredAt(): void;
        getRegisteredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setRegisteredAt(value?: google_protobuf_timestamp_pb.Timestamp): RegisteredUser;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RegisteredUser.AsObject;
        static toObject(includeInstance: boolean, msg: RegisteredUser): RegisteredUser.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RegisteredUser, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RegisteredUser;
        static deserializeBinaryFromReader(message: RegisteredUser, reader: jspb.BinaryReader): RegisteredUser;
    }

    export namespace RegisteredUser {
        export type AsObject = {
            id: string,
            firstName: string,
            lastName: string,
            email: string,
            registeredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}

export class AuthenticateRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AuthenticateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateRequest): AuthenticateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateRequest;
    static deserializeBinaryFromReader(message: AuthenticateRequest, reader: jspb.BinaryReader): AuthenticateRequest;
}

export namespace AuthenticateRequest {
    export type AsObject = {
        token: string,
    }
}

export class AuthenticateReply extends jspb.Message { 

    hasAuthenticatedUser(): boolean;
    clearAuthenticatedUser(): void;
    getAuthenticatedUser(): AuthenticateReply.AuthenticatedUser | undefined;
    setAuthenticatedUser(value?: AuthenticateReply.AuthenticatedUser): AuthenticateReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticateReply.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticateReply): AuthenticateReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticateReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticateReply;
    static deserializeBinaryFromReader(message: AuthenticateReply, reader: jspb.BinaryReader): AuthenticateReply;
}

export namespace AuthenticateReply {
    export type AsObject = {
        authenticatedUser?: AuthenticateReply.AuthenticatedUser.AsObject,
    }


    export class AuthenticatedUser extends jspb.Message { 
        getId(): string;
        setId(value: string): AuthenticatedUser;
        getFirstName(): string;
        setFirstName(value: string): AuthenticatedUser;
        getLastName(): string;
        setLastName(value: string): AuthenticatedUser;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AuthenticatedUser.AsObject;
        static toObject(includeInstance: boolean, msg: AuthenticatedUser): AuthenticatedUser.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AuthenticatedUser, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AuthenticatedUser;
        static deserializeBinaryFromReader(message: AuthenticatedUser, reader: jspb.BinaryReader): AuthenticatedUser;
    }

    export namespace AuthenticatedUser {
        export type AsObject = {
            id: string,
            firstName: string,
            lastName: string,
        }
    }

}
