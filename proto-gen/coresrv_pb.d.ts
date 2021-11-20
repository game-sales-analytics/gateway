// package: coresrv
// file: coresrv.proto

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

export class GameSale extends jspb.Message { 
    getId(): string;
    setId(value: string): GameSale;

    hasRegisteredAt(): boolean;
    clearRegisteredAt(): void;
    getRegisteredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRegisteredAt(value?: google_protobuf_timestamp_pb.Timestamp): GameSale;
    getRank(): number;
    setRank(value: number): GameSale;
    getName(): string;
    setName(value: string): GameSale;
    getPlatform(): string;
    setPlatform(value: string): GameSale;
    getYear(): number;
    setYear(value: number): GameSale;
    getGenre(): string;
    setGenre(value: string): GameSale;
    getPublisher(): string;
    setPublisher(value: string): GameSale;
    getNaSales(): number;
    setNaSales(value: number): GameSale;
    getEuSales(): number;
    setEuSales(value: number): GameSale;
    getJpSales(): number;
    setJpSales(value: number): GameSale;
    getOtherSales(): number;
    setOtherSales(value: number): GameSale;
    getGlobalSales(): number;
    setGlobalSales(value: number): GameSale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GameSale.AsObject;
    static toObject(includeInstance: boolean, msg: GameSale): GameSale.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GameSale, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GameSale;
    static deserializeBinaryFromReader(message: GameSale, reader: jspb.BinaryReader): GameSale;
}

export namespace GameSale {
    export type AsObject = {
        id: string,
        registeredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        rank: number,
        name: string,
        platform: string,
        year: number,
        genre: string,
        publisher: string,
        naSales: number,
        euSales: number,
        jpSales: number,
        otherSales: number,
        globalSales: number,
    }
}

export class BulkStoreGameSalesRequest extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<BulkStoreGameSalesRequest.GameSale>;
    setItemsList(value: Array<BulkStoreGameSalesRequest.GameSale>): BulkStoreGameSalesRequest;
    addItems(value?: BulkStoreGameSalesRequest.GameSale, index?: number): BulkStoreGameSalesRequest.GameSale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkStoreGameSalesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BulkStoreGameSalesRequest): BulkStoreGameSalesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkStoreGameSalesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkStoreGameSalesRequest;
    static deserializeBinaryFromReader(message: BulkStoreGameSalesRequest, reader: jspb.BinaryReader): BulkStoreGameSalesRequest;
}

export namespace BulkStoreGameSalesRequest {
    export type AsObject = {
        itemsList: Array<BulkStoreGameSalesRequest.GameSale.AsObject>,
    }


    export class GameSale extends jspb.Message { 
        getRank(): number;
        setRank(value: number): GameSale;
        getName(): string;
        setName(value: string): GameSale;
        getPlatform(): string;
        setPlatform(value: string): GameSale;
        getYear(): number;
        setYear(value: number): GameSale;
        getGenre(): string;
        setGenre(value: string): GameSale;
        getPublisher(): string;
        setPublisher(value: string): GameSale;
        getNaSales(): number;
        setNaSales(value: number): GameSale;
        getEuSales(): number;
        setEuSales(value: number): GameSale;
        getJpSales(): number;
        setJpSales(value: number): GameSale;
        getOtherSales(): number;
        setOtherSales(value: number): GameSale;
        getGlobalSales(): number;
        setGlobalSales(value: number): GameSale;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GameSale.AsObject;
        static toObject(includeInstance: boolean, msg: GameSale): GameSale.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GameSale, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GameSale;
        static deserializeBinaryFromReader(message: GameSale, reader: jspb.BinaryReader): GameSale;
    }

    export namespace GameSale {
        export type AsObject = {
            rank: number,
            name: string,
            platform: string,
            year: number,
            genre: string,
            publisher: string,
            naSales: number,
            euSales: number,
            jpSales: number,
            otherSales: number,
            globalSales: number,
        }
    }

}

export class BulkStoreGameSalesReply extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GameSale>;
    setItemsList(value: Array<GameSale>): BulkStoreGameSalesReply;
    addItems(value?: GameSale, index?: number): GameSale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BulkStoreGameSalesReply.AsObject;
    static toObject(includeInstance: boolean, msg: BulkStoreGameSalesReply): BulkStoreGameSalesReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BulkStoreGameSalesReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BulkStoreGameSalesReply;
    static deserializeBinaryFromReader(message: BulkStoreGameSalesReply, reader: jspb.BinaryReader): BulkStoreGameSalesReply;
}

export namespace BulkStoreGameSalesReply {
    export type AsObject = {
        itemsList: Array<GameSale.AsObject>,
    }
}

export class GetGameSalesByRankRequest extends jspb.Message { 
    getRank(): number;
    setRank(value: number): GetGameSalesByRankRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameSalesByRankRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameSalesByRankRequest): GetGameSalesByRankRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameSalesByRankRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameSalesByRankRequest;
    static deserializeBinaryFromReader(message: GetGameSalesByRankRequest, reader: jspb.BinaryReader): GetGameSalesByRankRequest;
}

export namespace GetGameSalesByRankRequest {
    export type AsObject = {
        rank: number,
    }
}

export class GetGameSalesByRankReply extends jspb.Message { 

    hasGameSale(): boolean;
    clearGameSale(): void;
    getGameSale(): GameSale | undefined;
    setGameSale(value?: GameSale): GetGameSalesByRankReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameSalesByRankReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameSalesByRankReply): GetGameSalesByRankReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameSalesByRankReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameSalesByRankReply;
    static deserializeBinaryFromReader(message: GetGameSalesByRankReply, reader: jspb.BinaryReader): GetGameSalesByRankReply;
}

export namespace GetGameSalesByRankReply {
    export type AsObject = {
        gameSale?: GameSale.AsObject,
    }
}

export class SearchGameSalesByNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): SearchGameSalesByNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchGameSalesByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchGameSalesByNameRequest): SearchGameSalesByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchGameSalesByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchGameSalesByNameRequest;
    static deserializeBinaryFromReader(message: SearchGameSalesByNameRequest, reader: jspb.BinaryReader): SearchGameSalesByNameRequest;
}

export namespace SearchGameSalesByNameRequest {
    export type AsObject = {
        name: string,
    }
}

export class SearchGameSalesByNameReply extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GameSale>;
    setItemsList(value: Array<GameSale>): SearchGameSalesByNameReply;
    addItems(value?: GameSale, index?: number): GameSale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchGameSalesByNameReply.AsObject;
    static toObject(includeInstance: boolean, msg: SearchGameSalesByNameReply): SearchGameSalesByNameReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchGameSalesByNameReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchGameSalesByNameReply;
    static deserializeBinaryFromReader(message: SearchGameSalesByNameReply, reader: jspb.BinaryReader): SearchGameSalesByNameReply;
}

export namespace SearchGameSalesByNameReply {
    export type AsObject = {
        itemsList: Array<GameSale.AsObject>,
    }
}

export class GetTopNGamesOfPlatformsRequest extends jspb.Message { 
    getN(): number;
    setN(value: number): GetTopNGamesOfPlatformsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopNGamesOfPlatformsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopNGamesOfPlatformsRequest): GetTopNGamesOfPlatformsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopNGamesOfPlatformsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopNGamesOfPlatformsRequest;
    static deserializeBinaryFromReader(message: GetTopNGamesOfPlatformsRequest, reader: jspb.BinaryReader): GetTopNGamesOfPlatformsRequest;
}

export namespace GetTopNGamesOfPlatformsRequest {
    export type AsObject = {
        n: number,
    }
}

export class GetTopNGamesOfPlatformsReply extends jspb.Message { 

    getGroupMap(): jspb.Map<string, GetTopNGamesOfPlatformsReply.GameSales>;
    clearGroupMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopNGamesOfPlatformsReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopNGamesOfPlatformsReply): GetTopNGamesOfPlatformsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopNGamesOfPlatformsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopNGamesOfPlatformsReply;
    static deserializeBinaryFromReader(message: GetTopNGamesOfPlatformsReply, reader: jspb.BinaryReader): GetTopNGamesOfPlatformsReply;
}

export namespace GetTopNGamesOfPlatformsReply {
    export type AsObject = {

        groupMap: Array<[string, GetTopNGamesOfPlatformsReply.GameSales.AsObject]>,
    }


    export class GameSales extends jspb.Message { 
        clearItemsList(): void;
        getItemsList(): Array<GameSale>;
        setItemsList(value: Array<GameSale>): GameSales;
        addItems(value?: GameSale, index?: number): GameSale;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GameSales.AsObject;
        static toObject(includeInstance: boolean, msg: GameSales): GameSales.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GameSales, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GameSales;
        static deserializeBinaryFromReader(message: GameSales, reader: jspb.BinaryReader): GameSales;
    }

    export namespace GameSales {
        export type AsObject = {
            itemsList: Array<GameSale.AsObject>,
        }
    }

}

export class GetTopNGamesOfYearRequest extends jspb.Message { 
    getN(): number;
    setN(value: number): GetTopNGamesOfYearRequest;
    getYear(): number;
    setYear(value: number): GetTopNGamesOfYearRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopNGamesOfYearRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopNGamesOfYearRequest): GetTopNGamesOfYearRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopNGamesOfYearRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopNGamesOfYearRequest;
    static deserializeBinaryFromReader(message: GetTopNGamesOfYearRequest, reader: jspb.BinaryReader): GetTopNGamesOfYearRequest;
}

export namespace GetTopNGamesOfYearRequest {
    export type AsObject = {
        n: number,
        year: number,
    }
}

export class GetTopNGamesOfYearReply extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GameSale>;
    setItemsList(value: Array<GameSale>): GetTopNGamesOfYearReply;
    addItems(value?: GameSale, index?: number): GameSale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopNGamesOfYearReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopNGamesOfYearReply): GetTopNGamesOfYearReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopNGamesOfYearReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopNGamesOfYearReply;
    static deserializeBinaryFromReader(message: GetTopNGamesOfYearReply, reader: jspb.BinaryReader): GetTopNGamesOfYearReply;
}

export namespace GetTopNGamesOfYearReply {
    export type AsObject = {
        itemsList: Array<GameSale.AsObject>,
    }
}

export class GetTopNGamesOfGenreRequest extends jspb.Message { 
    getN(): number;
    setN(value: number): GetTopNGamesOfGenreRequest;
    getGenre(): string;
    setGenre(value: string): GetTopNGamesOfGenreRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopNGamesOfGenreRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopNGamesOfGenreRequest): GetTopNGamesOfGenreRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopNGamesOfGenreRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopNGamesOfGenreRequest;
    static deserializeBinaryFromReader(message: GetTopNGamesOfGenreRequest, reader: jspb.BinaryReader): GetTopNGamesOfGenreRequest;
}

export namespace GetTopNGamesOfGenreRequest {
    export type AsObject = {
        n: number,
        genre: string,
    }
}

export class GetTopNGamesOfGenreReply extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GameSale>;
    setItemsList(value: Array<GameSale>): GetTopNGamesOfGenreReply;
    addItems(value?: GameSale, index?: number): GameSale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTopNGamesOfGenreReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetTopNGamesOfGenreReply): GetTopNGamesOfGenreReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTopNGamesOfGenreReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTopNGamesOfGenreReply;
    static deserializeBinaryFromReader(message: GetTopNGamesOfGenreReply, reader: jspb.BinaryReader): GetTopNGamesOfGenreReply;
}

export namespace GetTopNGamesOfGenreReply {
    export type AsObject = {
        itemsList: Array<GameSale.AsObject>,
    }
}

export class Get5MostSoldGamesByYearAndPlatformRequest extends jspb.Message { 
    getYear(): number;
    setYear(value: number): Get5MostSoldGamesByYearAndPlatformRequest;
    getPlatform(): string;
    setPlatform(value: string): Get5MostSoldGamesByYearAndPlatformRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Get5MostSoldGamesByYearAndPlatformRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Get5MostSoldGamesByYearAndPlatformRequest): Get5MostSoldGamesByYearAndPlatformRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Get5MostSoldGamesByYearAndPlatformRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Get5MostSoldGamesByYearAndPlatformRequest;
    static deserializeBinaryFromReader(message: Get5MostSoldGamesByYearAndPlatformRequest, reader: jspb.BinaryReader): Get5MostSoldGamesByYearAndPlatformRequest;
}

export namespace Get5MostSoldGamesByYearAndPlatformRequest {
    export type AsObject = {
        year: number,
        platform: string,
    }
}

export class Get5MostSoldGamesByYearAndPlatformReply extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GameSale>;
    setItemsList(value: Array<GameSale>): Get5MostSoldGamesByYearAndPlatformReply;
    addItems(value?: GameSale, index?: number): GameSale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Get5MostSoldGamesByYearAndPlatformReply.AsObject;
    static toObject(includeInstance: boolean, msg: Get5MostSoldGamesByYearAndPlatformReply): Get5MostSoldGamesByYearAndPlatformReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Get5MostSoldGamesByYearAndPlatformReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Get5MostSoldGamesByYearAndPlatformReply;
    static deserializeBinaryFromReader(message: Get5MostSoldGamesByYearAndPlatformReply, reader: jspb.BinaryReader): Get5MostSoldGamesByYearAndPlatformReply;
}

export namespace Get5MostSoldGamesByYearAndPlatformReply {
    export type AsObject = {
        itemsList: Array<GameSale.AsObject>,
    }
}

export class GetGameSalesWithMoreSalesInEUThanNARequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameSalesWithMoreSalesInEUThanNARequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameSalesWithMoreSalesInEUThanNARequest): GetGameSalesWithMoreSalesInEUThanNARequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameSalesWithMoreSalesInEUThanNARequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameSalesWithMoreSalesInEUThanNARequest;
    static deserializeBinaryFromReader(message: GetGameSalesWithMoreSalesInEUThanNARequest, reader: jspb.BinaryReader): GetGameSalesWithMoreSalesInEUThanNARequest;
}

export namespace GetGameSalesWithMoreSalesInEUThanNARequest {
    export type AsObject = {
    }
}

export class GetGameSalesWithMoreSalesInEUThanNAReply extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GameSale>;
    setItemsList(value: Array<GameSale>): GetGameSalesWithMoreSalesInEUThanNAReply;
    addItems(value?: GameSale, index?: number): GameSale;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameSalesWithMoreSalesInEUThanNAReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameSalesWithMoreSalesInEUThanNAReply): GetGameSalesWithMoreSalesInEUThanNAReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameSalesWithMoreSalesInEUThanNAReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameSalesWithMoreSalesInEUThanNAReply;
    static deserializeBinaryFromReader(message: GetGameSalesWithMoreSalesInEUThanNAReply, reader: jspb.BinaryReader): GetGameSalesWithMoreSalesInEUThanNAReply;
}

export namespace GetGameSalesWithMoreSalesInEUThanNAReply {
    export type AsObject = {
        itemsList: Array<GameSale.AsObject>,
    }
}

export class GetGameSalesInIdsRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<string>;
    setIdsList(value: Array<string>): GetGameSalesInIdsRequest;
    addIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameSalesInIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameSalesInIdsRequest): GetGameSalesInIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameSalesInIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameSalesInIdsRequest;
    static deserializeBinaryFromReader(message: GetGameSalesInIdsRequest, reader: jspb.BinaryReader): GetGameSalesInIdsRequest;
}

export namespace GetGameSalesInIdsRequest {
    export type AsObject = {
        idsList: Array<string>,
    }
}

export class GetGameSalesInIdsReply extends jspb.Message { 

    getGameSalesMap(): jspb.Map<string, GameSale>;
    clearGameSalesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetGameSalesInIdsReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetGameSalesInIdsReply): GetGameSalesInIdsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetGameSalesInIdsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetGameSalesInIdsReply;
    static deserializeBinaryFromReader(message: GetGameSalesInIdsReply, reader: jspb.BinaryReader): GetGameSalesInIdsReply;
}

export namespace GetGameSalesInIdsReply {
    export type AsObject = {

        gameSalesMap: Array<[string, GameSale.AsObject]>,
    }
}

export class GetYearlyTotalGameSalesInRangeRequest extends jspb.Message { 
    getStartYear(): number;
    setStartYear(value: number): GetYearlyTotalGameSalesInRangeRequest;
    getEndYear(): number;
    setEndYear(value: number): GetYearlyTotalGameSalesInRangeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetYearlyTotalGameSalesInRangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetYearlyTotalGameSalesInRangeRequest): GetYearlyTotalGameSalesInRangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetYearlyTotalGameSalesInRangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetYearlyTotalGameSalesInRangeRequest;
    static deserializeBinaryFromReader(message: GetYearlyTotalGameSalesInRangeRequest, reader: jspb.BinaryReader): GetYearlyTotalGameSalesInRangeRequest;
}

export namespace GetYearlyTotalGameSalesInRangeRequest {
    export type AsObject = {
        startYear: number,
        endYear: number,
    }
}

export class GetYearlyTotalGameSalesInRangeReply extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GetYearlyTotalGameSalesInRangeReply.TotalYearGameSales>;
    setItemsList(value: Array<GetYearlyTotalGameSalesInRangeReply.TotalYearGameSales>): GetYearlyTotalGameSalesInRangeReply;
    addItems(value?: GetYearlyTotalGameSalesInRangeReply.TotalYearGameSales, index?: number): GetYearlyTotalGameSalesInRangeReply.TotalYearGameSales;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetYearlyTotalGameSalesInRangeReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetYearlyTotalGameSalesInRangeReply): GetYearlyTotalGameSalesInRangeReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetYearlyTotalGameSalesInRangeReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetYearlyTotalGameSalesInRangeReply;
    static deserializeBinaryFromReader(message: GetYearlyTotalGameSalesInRangeReply, reader: jspb.BinaryReader): GetYearlyTotalGameSalesInRangeReply;
}

export namespace GetYearlyTotalGameSalesInRangeReply {
    export type AsObject = {
        itemsList: Array<GetYearlyTotalGameSalesInRangeReply.TotalYearGameSales.AsObject>,
    }


    export class TotalYearGameSales extends jspb.Message { 
        getYear(): number;
        setYear(value: number): TotalYearGameSales;
        getTotalGameSales(): number;
        setTotalGameSales(value: number): TotalYearGameSales;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TotalYearGameSales.AsObject;
        static toObject(includeInstance: boolean, msg: TotalYearGameSales): TotalYearGameSales.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TotalYearGameSales, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TotalYearGameSales;
        static deserializeBinaryFromReader(message: TotalYearGameSales, reader: jspb.BinaryReader): TotalYearGameSales;
    }

    export namespace TotalYearGameSales {
        export type AsObject = {
            year: number,
            totalGameSales: number,
        }
    }

}

export class GetTotalPublishersGameSalesInYearsRangeRequest extends jspb.Message { 
    clearPublisherIdsList(): void;
    getPublisherIdsList(): Array<string>;
    setPublisherIdsList(value: Array<string>): GetTotalPublishersGameSalesInYearsRangeRequest;
    addPublisherIds(value: string, index?: number): string;
    getStartYear(): number;
    setStartYear(value: number): GetTotalPublishersGameSalesInYearsRangeRequest;
    getEndYear(): number;
    setEndYear(value: number): GetTotalPublishersGameSalesInYearsRangeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTotalPublishersGameSalesInYearsRangeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTotalPublishersGameSalesInYearsRangeRequest): GetTotalPublishersGameSalesInYearsRangeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTotalPublishersGameSalesInYearsRangeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTotalPublishersGameSalesInYearsRangeRequest;
    static deserializeBinaryFromReader(message: GetTotalPublishersGameSalesInYearsRangeRequest, reader: jspb.BinaryReader): GetTotalPublishersGameSalesInYearsRangeRequest;
}

export namespace GetTotalPublishersGameSalesInYearsRangeRequest {
    export type AsObject = {
        publisherIdsList: Array<string>,
        startYear: number,
        endYear: number,
    }
}

export class GetTotalPublishersGameSalesInYearsRangeReply extends jspb.Message { 

    getPublisherSalesMap(): jspb.Map<string, GetTotalPublishersGameSalesInYearsRangeReply.PublisherTotalYearsGameSales>;
    clearPublisherSalesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTotalPublishersGameSalesInYearsRangeReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetTotalPublishersGameSalesInYearsRangeReply): GetTotalPublishersGameSalesInYearsRangeReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTotalPublishersGameSalesInYearsRangeReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTotalPublishersGameSalesInYearsRangeReply;
    static deserializeBinaryFromReader(message: GetTotalPublishersGameSalesInYearsRangeReply, reader: jspb.BinaryReader): GetTotalPublishersGameSalesInYearsRangeReply;
}

export namespace GetTotalPublishersGameSalesInYearsRangeReply {
    export type AsObject = {

        publisherSalesMap: Array<[string, GetTotalPublishersGameSalesInYearsRangeReply.PublisherTotalYearsGameSales.AsObject]>,
    }


    export class PublisherTotalYearsGameSales extends jspb.Message { 
        clearItemsList(): void;
        getItemsList(): Array<GetTotalPublishersGameSalesInYearsRangeReply.PublisherTotalYearsGameSales.PublisherTotalYearGameSales>;
        setItemsList(value: Array<GetTotalPublishersGameSalesInYearsRangeReply.PublisherTotalYearsGameSales.PublisherTotalYearGameSales>): PublisherTotalYearsGameSales;
        addItems(value?: GetTotalPublishersGameSalesInYearsRangeReply.PublisherTotalYearsGameSales.PublisherTotalYearGameSales, index?: number): GetTotalPublishersGameSalesInYearsRangeReply.PublisherTotalYearsGameSales.PublisherTotalYearGameSales;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PublisherTotalYearsGameSales.AsObject;
        static toObject(includeInstance: boolean, msg: PublisherTotalYearsGameSales): PublisherTotalYearsGameSales.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PublisherTotalYearsGameSales, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PublisherTotalYearsGameSales;
        static deserializeBinaryFromReader(message: PublisherTotalYearsGameSales, reader: jspb.BinaryReader): PublisherTotalYearsGameSales;
    }

    export namespace PublisherTotalYearsGameSales {
        export type AsObject = {
            itemsList: Array<GetTotalPublishersGameSalesInYearsRangeReply.PublisherTotalYearsGameSales.PublisherTotalYearGameSales.AsObject>,
        }


        export class PublisherTotalYearGameSales extends jspb.Message { 
            getYear(): number;
            setYear(value: number): PublisherTotalYearGameSales;
            getTotalGameSales(): number;
            setTotalGameSales(value: number): PublisherTotalYearGameSales;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PublisherTotalYearGameSales.AsObject;
            static toObject(includeInstance: boolean, msg: PublisherTotalYearGameSales): PublisherTotalYearGameSales.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PublisherTotalYearGameSales, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PublisherTotalYearGameSales;
            static deserializeBinaryFromReader(message: PublisherTotalYearGameSales, reader: jspb.BinaryReader): PublisherTotalYearGameSales;
        }

        export namespace PublisherTotalYearGameSales {
            export type AsObject = {
                year: number,
                totalGameSales: number,
            }
        }

    }

}

export class GetTotalGameSalesInYearsRangeByGenreRequest extends jspb.Message { 
    getStartYear(): number;
    setStartYear(value: number): GetTotalGameSalesInYearsRangeByGenreRequest;
    getEndYear(): number;
    setEndYear(value: number): GetTotalGameSalesInYearsRangeByGenreRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTotalGameSalesInYearsRangeByGenreRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTotalGameSalesInYearsRangeByGenreRequest): GetTotalGameSalesInYearsRangeByGenreRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTotalGameSalesInYearsRangeByGenreRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTotalGameSalesInYearsRangeByGenreRequest;
    static deserializeBinaryFromReader(message: GetTotalGameSalesInYearsRangeByGenreRequest, reader: jspb.BinaryReader): GetTotalGameSalesInYearsRangeByGenreRequest;
}

export namespace GetTotalGameSalesInYearsRangeByGenreRequest {
    export type AsObject = {
        startYear: number,
        endYear: number,
    }
}

export class GetTotalGameSalesInYearsRangeByGenreReply extends jspb.Message { 

    getGenreTotalSalesMap(): jspb.Map<string, number>;
    clearGenreTotalSalesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTotalGameSalesInYearsRangeByGenreReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetTotalGameSalesInYearsRangeByGenreReply): GetTotalGameSalesInYearsRangeByGenreReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTotalGameSalesInYearsRangeByGenreReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTotalGameSalesInYearsRangeByGenreReply;
    static deserializeBinaryFromReader(message: GetTotalGameSalesInYearsRangeByGenreReply, reader: jspb.BinaryReader): GetTotalGameSalesInYearsRangeByGenreReply;
}

export namespace GetTotalGameSalesInYearsRangeByGenreReply {
    export type AsObject = {

        genreTotalSalesMap: Array<[string, number]>,
    }
}
