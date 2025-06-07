
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model problem
 * 
 */
export type problem = $Result.DefaultSelection<Prisma.$problemPayload>
/**
 * Model submission
 * 
 */
export type submission = $Result.DefaultSelection<Prisma.$submissionPayload>
/**
 * Model testcase
 * 
 */
export type testcase = $Result.DefaultSelection<Prisma.$testcasePayload>
/**
 * Model problemSolved
 * 
 */
export type problemSolved = $Result.DefaultSelection<Prisma.$problemSolvedPayload>
/**
 * Model playlist
 * 
 */
export type playlist = $Result.DefaultSelection<Prisma.$playlistPayload>
/**
 * Model problemInPlaylist
 * 
 */
export type problemInPlaylist = $Result.DefaultSelection<Prisma.$problemInPlaylistPayload>
/**
 * Model PlaylistPurchase
 * 
 */
export type PlaylistPurchase = $Result.DefaultSelection<Prisma.$PlaylistPurchasePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const userRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type userRole = (typeof userRole)[keyof typeof userRole]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const submissionStatus: {
  ACCEPTED: 'ACCEPTED',
  WRONG_ANSWER: 'WRONG_ANSWER'
};

export type submissionStatus = (typeof submissionStatus)[keyof typeof submissionStatus]


export const authSource: {
  GOOGLE: 'GOOGLE',
  LOCAL: 'LOCAL'
};

export type authSource = (typeof authSource)[keyof typeof authSource]


export const taskStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  INCOMPLETE: 'INCOMPLETE'
};

export type taskStatus = (typeof taskStatus)[keyof typeof taskStatus]

}

export type userRole = $Enums.userRole

export const userRole: typeof $Enums.userRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type submissionStatus = $Enums.submissionStatus

export const submissionStatus: typeof $Enums.submissionStatus

export type authSource = $Enums.authSource

export const authSource: typeof $Enums.authSource

export type taskStatus = $Enums.taskStatus

export const taskStatus: typeof $Enums.taskStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.problemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.submissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testcase`: Exposes CRUD operations for the **testcase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testcases
    * const testcases = await prisma.testcase.findMany()
    * ```
    */
  get testcase(): Prisma.testcaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemSolved`: Exposes CRUD operations for the **problemSolved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemSolveds
    * const problemSolveds = await prisma.problemSolved.findMany()
    * ```
    */
  get problemSolved(): Prisma.problemSolvedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.playlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemInPlaylist`: Exposes CRUD operations for the **problemInPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemInPlaylists
    * const problemInPlaylists = await prisma.problemInPlaylist.findMany()
    * ```
    */
  get problemInPlaylist(): Prisma.problemInPlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistPurchase`: Exposes CRUD operations for the **PlaylistPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistPurchases
    * const playlistPurchases = await prisma.playlistPurchase.findMany()
    * ```
    */
  get playlistPurchase(): Prisma.PlaylistPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    problem: 'problem',
    submission: 'submission',
    testcase: 'testcase',
    problemSolved: 'problemSolved',
    playlist: 'playlist',
    problemInPlaylist: 'problemInPlaylist',
    PlaylistPurchase: 'PlaylistPurchase',
    Task: 'Task',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "problem" | "submission" | "testcase" | "problemSolved" | "playlist" | "problemInPlaylist" | "playlistPurchase" | "task" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      problem: {
        payload: Prisma.$problemPayload<ExtArgs>
        fields: Prisma.problemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          findFirst: {
            args: Prisma.problemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          findMany: {
            args: Prisma.problemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>[]
          }
          create: {
            args: Prisma.problemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          createMany: {
            args: Prisma.problemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.problemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>[]
          }
          delete: {
            args: Prisma.problemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          update: {
            args: Prisma.problemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          deleteMany: {
            args: Prisma.problemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.problemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>[]
          }
          upsert: {
            args: Prisma.problemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.problemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.problemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      submission: {
        payload: Prisma.$submissionPayload<ExtArgs>
        fields: Prisma.submissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          findFirst: {
            args: Prisma.submissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          findMany: {
            args: Prisma.submissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>[]
          }
          create: {
            args: Prisma.submissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          createMany: {
            args: Prisma.submissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.submissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>[]
          }
          delete: {
            args: Prisma.submissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          update: {
            args: Prisma.submissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          deleteMany: {
            args: Prisma.submissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.submissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.submissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>[]
          }
          upsert: {
            args: Prisma.submissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.submissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      testcase: {
        payload: Prisma.$testcasePayload<ExtArgs>
        fields: Prisma.testcaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testcaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testcaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          findFirst: {
            args: Prisma.testcaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testcaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          findMany: {
            args: Prisma.testcaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>[]
          }
          create: {
            args: Prisma.testcaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          createMany: {
            args: Prisma.testcaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.testcaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>[]
          }
          delete: {
            args: Prisma.testcaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          update: {
            args: Prisma.testcaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          deleteMany: {
            args: Prisma.testcaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testcaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.testcaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>[]
          }
          upsert: {
            args: Prisma.testcaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testcasePayload>
          }
          aggregate: {
            args: Prisma.TestcaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestcase>
          }
          groupBy: {
            args: Prisma.testcaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestcaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.testcaseCountArgs<ExtArgs>
            result: $Utils.Optional<TestcaseCountAggregateOutputType> | number
          }
        }
      }
      problemSolved: {
        payload: Prisma.$problemSolvedPayload<ExtArgs>
        fields: Prisma.problemSolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problemSolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problemSolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          findFirst: {
            args: Prisma.problemSolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problemSolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          findMany: {
            args: Prisma.problemSolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          create: {
            args: Prisma.problemSolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          createMany: {
            args: Prisma.problemSolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.problemSolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          delete: {
            args: Prisma.problemSolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          update: {
            args: Prisma.problemSolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          deleteMany: {
            args: Prisma.problemSolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problemSolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.problemSolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          upsert: {
            args: Prisma.problemSolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          aggregate: {
            args: Prisma.ProblemSolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemSolved>
          }
          groupBy: {
            args: Prisma.problemSolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.problemSolvedCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedCountAggregateOutputType> | number
          }
        }
      }
      playlist: {
        payload: Prisma.$playlistPayload<ExtArgs>
        fields: Prisma.playlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          findFirst: {
            args: Prisma.playlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          findMany: {
            args: Prisma.playlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>[]
          }
          create: {
            args: Prisma.playlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          createMany: {
            args: Prisma.playlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.playlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>[]
          }
          delete: {
            args: Prisma.playlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          update: {
            args: Prisma.playlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          deleteMany: {
            args: Prisma.playlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.playlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>[]
          }
          upsert: {
            args: Prisma.playlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playlistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.playlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.playlistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      problemInPlaylist: {
        payload: Prisma.$problemInPlaylistPayload<ExtArgs>
        fields: Prisma.problemInPlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problemInPlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problemInPlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>
          }
          findFirst: {
            args: Prisma.problemInPlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problemInPlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>
          }
          findMany: {
            args: Prisma.problemInPlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>[]
          }
          create: {
            args: Prisma.problemInPlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>
          }
          createMany: {
            args: Prisma.problemInPlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.problemInPlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>[]
          }
          delete: {
            args: Prisma.problemInPlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>
          }
          update: {
            args: Prisma.problemInPlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>
          }
          deleteMany: {
            args: Prisma.problemInPlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problemInPlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.problemInPlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>[]
          }
          upsert: {
            args: Prisma.problemInPlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemInPlaylistPayload>
          }
          aggregate: {
            args: Prisma.ProblemInPlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemInPlaylist>
          }
          groupBy: {
            args: Prisma.problemInPlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemInPlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.problemInPlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemInPlaylistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistPurchase: {
        payload: Prisma.$PlaylistPurchasePayload<ExtArgs>
        fields: Prisma.PlaylistPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>
          }
          findFirst: {
            args: Prisma.PlaylistPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>
          }
          findMany: {
            args: Prisma.PlaylistPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>[]
          }
          create: {
            args: Prisma.PlaylistPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>
          }
          createMany: {
            args: Prisma.PlaylistPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>[]
          }
          delete: {
            args: Prisma.PlaylistPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>
          }
          update: {
            args: Prisma.PlaylistPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>
          }
          deleteMany: {
            args: Prisma.PlaylistPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>[]
          }
          upsert: {
            args: Prisma.PlaylistPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPurchasePayload>
          }
          aggregate: {
            args: Prisma.PlaylistPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistPurchase>
          }
          groupBy: {
            args: Prisma.PlaylistPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistPurchaseCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    problem?: problemOmit
    submission?: submissionOmit
    testcase?: testcaseOmit
    problemSolved?: problemSolvedOmit
    playlist?: playlistOmit
    problemInPlaylist?: problemInPlaylistOmit
    playlistPurchase?: PlaylistPurchaseOmit
    task?: TaskOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    problems: number
    problemSolved: number
    playlist: number
    purchases: number
    tasks: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    problemSolved?: boolean | UserCountOutputTypeCountProblemSolvedArgs
    playlist?: boolean | UserCountOutputTypeCountPlaylistArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistPurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submission: number
    solvedBy: number
    problemsPlaylists: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ProblemCountOutputTypeCountSubmissionArgs
    solvedBy?: boolean | ProblemCountOutputTypeCountSolvedByArgs
    problemsPlaylists?: boolean | ProblemCountOutputTypeCountProblemsPlaylistsArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemsPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemInPlaylistWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testcase: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testcase?: boolean | SubmissionCountOutputTypeCountTestcaseArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestcaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcaseWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    problems: number
    purchases: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | PlaylistCountOutputTypeCountProblemsArgs
    purchases?: boolean | PlaylistCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemInPlaylistWhereInput
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistPurchaseWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    notifications: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | TaskCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    role: $Enums.userRole | null
    password: string | null
    isVerified: boolean | null
    authProvider: $Enums.authSource | null
    refreshToken: string | null
    verificationCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    role: $Enums.userRole | null
    password: string | null
    isVerified: boolean | null
    authProvider: $Enums.authSource | null
    refreshToken: string | null
    verificationCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    avatar: number
    role: number
    password: number
    isVerified: number
    authProvider: number
    refreshToken: number
    verificationCode: number
    purchasedPlaylist: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    isVerified?: true
    authProvider?: true
    refreshToken?: true
    verificationCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    isVerified?: true
    authProvider?: true
    refreshToken?: true
    verificationCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    isVerified?: true
    authProvider?: true
    refreshToken?: true
    verificationCode?: true
    purchasedPlaylist?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    avatar: string | null
    role: $Enums.userRole
    password: string | null
    isVerified: boolean
    authProvider: $Enums.authSource
    refreshToken: string | null
    verificationCode: string | null
    purchasedPlaylist: string[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    isVerified?: boolean
    authProvider?: boolean
    refreshToken?: boolean
    verificationCode?: boolean
    purchasedPlaylist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | user$problemsArgs<ExtArgs>
    problemSolved?: boolean | user$problemSolvedArgs<ExtArgs>
    playlist?: boolean | user$playlistArgs<ExtArgs>
    purchases?: boolean | user$purchasesArgs<ExtArgs>
    tasks?: boolean | user$tasksArgs<ExtArgs>
    notifications?: boolean | user$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    isVerified?: boolean
    authProvider?: boolean
    refreshToken?: boolean
    verificationCode?: boolean
    purchasedPlaylist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    isVerified?: boolean
    authProvider?: boolean
    refreshToken?: boolean
    verificationCode?: boolean
    purchasedPlaylist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    isVerified?: boolean
    authProvider?: boolean
    refreshToken?: boolean
    verificationCode?: boolean
    purchasedPlaylist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "avatar" | "role" | "password" | "isVerified" | "authProvider" | "refreshToken" | "verificationCode" | "purchasedPlaylist" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | user$problemsArgs<ExtArgs>
    problemSolved?: boolean | user$problemSolvedArgs<ExtArgs>
    playlist?: boolean | user$playlistArgs<ExtArgs>
    purchases?: boolean | user$purchasesArgs<ExtArgs>
    tasks?: boolean | user$tasksArgs<ExtArgs>
    notifications?: boolean | user$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      problems: Prisma.$problemPayload<ExtArgs>[]
      problemSolved: Prisma.$problemSolvedPayload<ExtArgs>[]
      playlist: Prisma.$playlistPayload<ExtArgs>[]
      purchases: Prisma.$PlaylistPurchasePayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      avatar: string | null
      role: $Enums.userRole
      password: string | null
      isVerified: boolean
      authProvider: $Enums.authSource
      refreshToken: string | null
      verificationCode: string | null
      purchasedPlaylist: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends user$problemsArgs<ExtArgs> = {}>(args?: Subset<T, user$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends user$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, user$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlist<T extends user$playlistArgs<ExtArgs> = {}>(args?: Subset<T, user$playlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends user$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, user$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends user$tasksArgs<ExtArgs> = {}>(args?: Subset<T, user$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends user$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, user$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly avatar: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'userRole'>
    readonly password: FieldRef<"user", 'String'>
    readonly isVerified: FieldRef<"user", 'Boolean'>
    readonly authProvider: FieldRef<"user", 'authSource'>
    readonly refreshToken: FieldRef<"user", 'String'>
    readonly verificationCode: FieldRef<"user", 'String'>
    readonly purchasedPlaylist: FieldRef<"user", 'String[]'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.problems
   */
  export type user$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    where?: problemWhereInput
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    cursor?: problemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * user.problemSolved
   */
  export type user$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    cursor?: problemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * user.playlist
   */
  export type user$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    where?: playlistWhereInput
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    cursor?: playlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * user.purchases
   */
  export type user$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    where?: PlaylistPurchaseWhereInput
    orderBy?: PlaylistPurchaseOrderByWithRelationInput | PlaylistPurchaseOrderByWithRelationInput[]
    cursor?: PlaylistPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistPurchaseScalarFieldEnum | PlaylistPurchaseScalarFieldEnum[]
  }

  /**
   * user.tasks
   */
  export type user$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * user.notifications
   */
  export type user$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    testCases: number
    codesnippets: number
    referenceSolution: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    testCases?: true
    codesnippets?: true
    referenceSolution?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problem to aggregate.
     */
    where?: problemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type problemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemWhereInput
    orderBy?: problemOrderByWithAggregationInput | problemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: problemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags: string[]
    userId: string
    examples: JsonValue
    constraints: JsonValue
    hints: JsonValue | null
    editorial: string | null
    testCases: JsonValue
    codesnippets: JsonValue
    referenceSolution: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends problemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type problemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codesnippets?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    submission?: boolean | problem$submissionArgs<ExtArgs>
    solvedBy?: boolean | problem$solvedByArgs<ExtArgs>
    problemsPlaylists?: boolean | problem$problemsPlaylistsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type problemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codesnippets?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type problemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codesnippets?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type problemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testCases?: boolean
    codesnippets?: boolean
    referenceSolution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type problemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "userId" | "examples" | "constraints" | "hints" | "editorial" | "testCases" | "codesnippets" | "referenceSolution" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type problemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    submission?: boolean | problem$submissionArgs<ExtArgs>
    solvedBy?: boolean | problem$solvedByArgs<ExtArgs>
    problemsPlaylists?: boolean | problem$problemsPlaylistsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type problemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type problemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $problemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problem"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      submission: Prisma.$submissionPayload<ExtArgs>[]
      solvedBy: Prisma.$problemSolvedPayload<ExtArgs>[]
      problemsPlaylists: Prisma.$problemInPlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      tags: string[]
      userId: string
      examples: Prisma.JsonValue
      constraints: Prisma.JsonValue
      hints: Prisma.JsonValue | null
      editorial: string | null
      testCases: Prisma.JsonValue
      codesnippets: Prisma.JsonValue
      referenceSolution: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type problemGetPayload<S extends boolean | null | undefined | problemDefaultArgs> = $Result.GetResult<Prisma.$problemPayload, S>

  type problemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface problemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problem'], meta: { name: 'problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {problemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problemFindUniqueArgs>(args: SelectSubset<T, problemFindUniqueArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problemFindUniqueOrThrowArgs>(args: SelectSubset<T, problemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problemFindFirstArgs>(args?: SelectSubset<T, problemFindFirstArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problemFindFirstOrThrowArgs>(args?: SelectSubset<T, problemFindFirstOrThrowArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends problemFindManyArgs>(args?: SelectSubset<T, problemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {problemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends problemCreateArgs>(args: SelectSubset<T, problemCreateArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {problemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problemCreateManyArgs>(args?: SelectSubset<T, problemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {problemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends problemCreateManyAndReturnArgs>(args?: SelectSubset<T, problemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {problemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends problemDeleteArgs>(args: SelectSubset<T, problemDeleteArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {problemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problemUpdateArgs>(args: SelectSubset<T, problemUpdateArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {problemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problemDeleteManyArgs>(args?: SelectSubset<T, problemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problemUpdateManyArgs>(args: SelectSubset<T, problemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {problemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends problemUpdateManyAndReturnArgs>(args: SelectSubset<T, problemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {problemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends problemUpsertArgs>(args: SelectSubset<T, problemUpsertArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends problemCountArgs>(
      args?: Subset<T, problemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends problemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problemGroupByArgs['orderBy'] }
        : { orderBy?: problemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, problemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problem model
   */
  readonly fields: problemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submission<T extends problem$submissionArgs<ExtArgs> = {}>(args?: Subset<T, problem$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedBy<T extends problem$solvedByArgs<ExtArgs> = {}>(args?: Subset<T, problem$solvedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemsPlaylists<T extends problem$problemsPlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, problem$problemsPlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the problem model
   */
  interface problemFieldRefs {
    readonly id: FieldRef<"problem", 'String'>
    readonly title: FieldRef<"problem", 'String'>
    readonly description: FieldRef<"problem", 'String'>
    readonly difficulty: FieldRef<"problem", 'Difficulty'>
    readonly tags: FieldRef<"problem", 'String[]'>
    readonly userId: FieldRef<"problem", 'String'>
    readonly examples: FieldRef<"problem", 'Json'>
    readonly constraints: FieldRef<"problem", 'Json'>
    readonly hints: FieldRef<"problem", 'Json'>
    readonly editorial: FieldRef<"problem", 'String'>
    readonly testCases: FieldRef<"problem", 'Json'>
    readonly codesnippets: FieldRef<"problem", 'Json'>
    readonly referenceSolution: FieldRef<"problem", 'Json'>
    readonly createdAt: FieldRef<"problem", 'DateTime'>
    readonly updatedAt: FieldRef<"problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * problem findUnique
   */
  export type problemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problem to fetch.
     */
    where: problemWhereUniqueInput
  }

  /**
   * problem findUniqueOrThrow
   */
  export type problemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problem to fetch.
     */
    where: problemWhereUniqueInput
  }

  /**
   * problem findFirst
   */
  export type problemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problem to fetch.
     */
    where?: problemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problems.
     */
    cursor?: problemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * problem findFirstOrThrow
   */
  export type problemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problem to fetch.
     */
    where?: problemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problems.
     */
    cursor?: problemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * problem findMany
   */
  export type problemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problems to fetch.
     */
    where?: problemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problems.
     */
    cursor?: problemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * problem create
   */
  export type problemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * The data needed to create a problem.
     */
    data: XOR<problemCreateInput, problemUncheckedCreateInput>
  }

  /**
   * problem createMany
   */
  export type problemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problems.
     */
    data: problemCreateManyInput | problemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problem createManyAndReturn
   */
  export type problemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * The data used to create many problems.
     */
    data: problemCreateManyInput | problemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * problem update
   */
  export type problemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * The data needed to update a problem.
     */
    data: XOR<problemUpdateInput, problemUncheckedUpdateInput>
    /**
     * Choose, which problem to update.
     */
    where: problemWhereUniqueInput
  }

  /**
   * problem updateMany
   */
  export type problemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problems.
     */
    data: XOR<problemUpdateManyMutationInput, problemUncheckedUpdateManyInput>
    /**
     * Filter which problems to update
     */
    where?: problemWhereInput
    /**
     * Limit how many problems to update.
     */
    limit?: number
  }

  /**
   * problem updateManyAndReturn
   */
  export type problemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * The data used to update problems.
     */
    data: XOR<problemUpdateManyMutationInput, problemUncheckedUpdateManyInput>
    /**
     * Filter which problems to update
     */
    where?: problemWhereInput
    /**
     * Limit how many problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * problem upsert
   */
  export type problemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * The filter to search for the problem to update in case it exists.
     */
    where: problemWhereUniqueInput
    /**
     * In case the problem found by the `where` argument doesn't exist, create a new problem with this data.
     */
    create: XOR<problemCreateInput, problemUncheckedCreateInput>
    /**
     * In case the problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problemUpdateInput, problemUncheckedUpdateInput>
  }

  /**
   * problem delete
   */
  export type problemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter which problem to delete.
     */
    where: problemWhereUniqueInput
  }

  /**
   * problem deleteMany
   */
  export type problemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problems to delete
     */
    where?: problemWhereInput
    /**
     * Limit how many problems to delete.
     */
    limit?: number
  }

  /**
   * problem.submission
   */
  export type problem$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    where?: submissionWhereInput
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    cursor?: submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * problem.solvedBy
   */
  export type problem$solvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    cursor?: problemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problem.problemsPlaylists
   */
  export type problem$problemsPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    where?: problemInPlaylistWhereInput
    orderBy?: problemInPlaylistOrderByWithRelationInput | problemInPlaylistOrderByWithRelationInput[]
    cursor?: problemInPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * problem without action
   */
  export type problemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
  }


  /**
   * Model submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    problemId: string | null
    userId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: $Enums.submissionStatus | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    problemId: string | null
    userId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: $Enums.submissionStatus | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    problemId: number
    userId: number
    sourceCode: number
    language: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    problemId?: true
    userId?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    problemId?: true
    userId?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    problemId?: true
    userId?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submission to aggregate.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type submissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionWhereInput
    orderBy?: submissionOrderByWithAggregationInput | submissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: submissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    problemId: string
    userId: string
    sourceCode: JsonValue
    language: string
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: $Enums.submissionStatus
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends submissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type submissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    userId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | problemDefaultArgs<ExtArgs>
    testcase?: boolean | submission$testcaseArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type submissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    userId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type submissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemId?: boolean
    userId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type submissionSelectScalar = {
    id?: boolean
    problemId?: boolean
    userId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type submissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "problemId" | "userId" | "sourceCode" | "language" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type submissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | problemDefaultArgs<ExtArgs>
    testcase?: boolean | submission$testcaseArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type submissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }
  export type submissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }

  export type $submissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submission"
    objects: {
      problem: Prisma.$problemPayload<ExtArgs>
      testcase: Prisma.$testcasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      problemId: string
      userId: string
      sourceCode: Prisma.JsonValue
      language: string
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: $Enums.submissionStatus
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type submissionGetPayload<S extends boolean | null | undefined | submissionDefaultArgs> = $Result.GetResult<Prisma.$submissionPayload, S>

  type submissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<submissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface submissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submission'], meta: { name: 'submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {submissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends submissionFindUniqueArgs>(args: SelectSubset<T, submissionFindUniqueArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {submissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends submissionFindUniqueOrThrowArgs>(args: SelectSubset<T, submissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends submissionFindFirstArgs>(args?: SelectSubset<T, submissionFindFirstArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends submissionFindFirstOrThrowArgs>(args?: SelectSubset<T, submissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends submissionFindManyArgs>(args?: SelectSubset<T, submissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {submissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends submissionCreateArgs>(args: SelectSubset<T, submissionCreateArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {submissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends submissionCreateManyArgs>(args?: SelectSubset<T, submissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {submissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends submissionCreateManyAndReturnArgs>(args?: SelectSubset<T, submissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {submissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends submissionDeleteArgs>(args: SelectSubset<T, submissionDeleteArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {submissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends submissionUpdateArgs>(args: SelectSubset<T, submissionUpdateArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {submissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends submissionDeleteManyArgs>(args?: SelectSubset<T, submissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends submissionUpdateManyArgs>(args: SelectSubset<T, submissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {submissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends submissionUpdateManyAndReturnArgs>(args: SelectSubset<T, submissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {submissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends submissionUpsertArgs>(args: SelectSubset<T, submissionUpsertArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends submissionCountArgs>(
      args?: Subset<T, submissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends submissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionGroupByArgs['orderBy'] }
        : { orderBy?: submissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, submissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submission model
   */
  readonly fields: submissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends problemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, problemDefaultArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testcase<T extends submission$testcaseArgs<ExtArgs> = {}>(args?: Subset<T, submission$testcaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the submission model
   */
  interface submissionFieldRefs {
    readonly id: FieldRef<"submission", 'String'>
    readonly problemId: FieldRef<"submission", 'String'>
    readonly userId: FieldRef<"submission", 'String'>
    readonly sourceCode: FieldRef<"submission", 'Json'>
    readonly language: FieldRef<"submission", 'String'>
    readonly stdin: FieldRef<"submission", 'String'>
    readonly stdout: FieldRef<"submission", 'String'>
    readonly stderr: FieldRef<"submission", 'String'>
    readonly compileOutput: FieldRef<"submission", 'String'>
    readonly status: FieldRef<"submission", 'submissionStatus'>
    readonly memory: FieldRef<"submission", 'String'>
    readonly time: FieldRef<"submission", 'String'>
    readonly createdAt: FieldRef<"submission", 'DateTime'>
    readonly updatedAt: FieldRef<"submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * submission findUnique
   */
  export type submissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where: submissionWhereUniqueInput
  }

  /**
   * submission findUniqueOrThrow
   */
  export type submissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where: submissionWhereUniqueInput
  }

  /**
   * submission findFirst
   */
  export type submissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * submission findFirstOrThrow
   */
  export type submissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * submission findMany
   */
  export type submissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissions.
     */
    cursor?: submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * submission create
   */
  export type submissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The data needed to create a submission.
     */
    data: XOR<submissionCreateInput, submissionUncheckedCreateInput>
  }

  /**
   * submission createMany
   */
  export type submissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissions.
     */
    data: submissionCreateManyInput | submissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submission createManyAndReturn
   */
  export type submissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * The data used to create many submissions.
     */
    data: submissionCreateManyInput | submissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * submission update
   */
  export type submissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The data needed to update a submission.
     */
    data: XOR<submissionUpdateInput, submissionUncheckedUpdateInput>
    /**
     * Choose, which submission to update.
     */
    where: submissionWhereUniqueInput
  }

  /**
   * submission updateMany
   */
  export type submissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
  }

  /**
   * submission updateManyAndReturn
   */
  export type submissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * submission upsert
   */
  export type submissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The filter to search for the submission to update in case it exists.
     */
    where: submissionWhereUniqueInput
    /**
     * In case the submission found by the `where` argument doesn't exist, create a new submission with this data.
     */
    create: XOR<submissionCreateInput, submissionUncheckedCreateInput>
    /**
     * In case the submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionUpdateInput, submissionUncheckedUpdateInput>
  }

  /**
   * submission delete
   */
  export type submissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter which submission to delete.
     */
    where: submissionWhereUniqueInput
  }

  /**
   * submission deleteMany
   */
  export type submissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to delete
     */
    where?: submissionWhereInput
    /**
     * Limit how many submissions to delete.
     */
    limit?: number
  }

  /**
   * submission.testcase
   */
  export type submission$testcaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    where?: testcaseWhereInput
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    cursor?: testcaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * submission without action
   */
  export type submissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submission
     */
    omit?: submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionInclude<ExtArgs> | null
  }


  /**
   * Model testcase
   */

  export type AggregateTestcase = {
    _count: TestcaseCountAggregateOutputType | null
    _avg: TestcaseAvgAggregateOutputType | null
    _sum: TestcaseSumAggregateOutputType | null
    _min: TestcaseMinAggregateOutputType | null
    _max: TestcaseMaxAggregateOutputType | null
  }

  export type TestcaseAvgAggregateOutputType = {
    testCase: number | null
  }

  export type TestcaseSumAggregateOutputType = {
    testCase: number | null
  }

  export type TestcaseMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    expected: string | null
    stderr: string | null
    compileOutput: string | null
    status: $Enums.submissionStatus | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestcaseMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    expected: string | null
    stderr: string | null
    compileOutput: string | null
    status: $Enums.submissionStatus | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestcaseCountAggregateOutputType = {
    id: number
    submissionId: number
    testCase: number
    passed: number
    stdout: number
    expected: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestcaseAvgAggregateInputType = {
    testCase?: true
  }

  export type TestcaseSumAggregateInputType = {
    testCase?: true
  }

  export type TestcaseMinAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestcaseMaxAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestcaseCountAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestcaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcase to aggregate.
     */
    where?: testcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testcases
    **/
    _count?: true | TestcaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestcaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestcaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestcaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestcaseMaxAggregateInputType
  }

  export type GetTestcaseAggregateType<T extends TestcaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTestcase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestcase[P]>
      : GetScalarType<T[P], AggregateTestcase[P]>
  }




  export type testcaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testcaseWhereInput
    orderBy?: testcaseOrderByWithAggregationInput | testcaseOrderByWithAggregationInput[]
    by: TestcaseScalarFieldEnum[] | TestcaseScalarFieldEnum
    having?: testcaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestcaseCountAggregateInputType | true
    _avg?: TestcaseAvgAggregateInputType
    _sum?: TestcaseSumAggregateInputType
    _min?: TestcaseMinAggregateInputType
    _max?: TestcaseMaxAggregateInputType
  }

  export type TestcaseGroupByOutputType = {
    id: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout: string | null
    expected: string
    stderr: string | null
    compileOutput: string | null
    status: $Enums.submissionStatus
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestcaseCountAggregateOutputType | null
    _avg: TestcaseAvgAggregateOutputType | null
    _sum: TestcaseSumAggregateOutputType | null
    _min: TestcaseMinAggregateOutputType | null
    _max: TestcaseMaxAggregateOutputType | null
  }

  type GetTestcaseGroupByPayload<T extends testcaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestcaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestcaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestcaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestcaseGroupByOutputType[P]>
        }
      >
    >


  export type testcaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | submissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcase"]>

  export type testcaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | submissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcase"]>

  export type testcaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | submissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcase"]>

  export type testcaseSelectScalar = {
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type testcaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "testCase" | "passed" | "stdout" | "expected" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["testcase"]>
  export type testcaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | submissionDefaultArgs<ExtArgs>
  }
  export type testcaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | submissionDefaultArgs<ExtArgs>
  }
  export type testcaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | submissionDefaultArgs<ExtArgs>
  }

  export type $testcasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testcase"
    objects: {
      submission: Prisma.$submissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      testCase: number
      passed: boolean
      stdout: string | null
      expected: string
      stderr: string | null
      compileOutput: string | null
      status: $Enums.submissionStatus
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testcase"]>
    composites: {}
  }

  type testcaseGetPayload<S extends boolean | null | undefined | testcaseDefaultArgs> = $Result.GetResult<Prisma.$testcasePayload, S>

  type testcaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testcaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestcaseCountAggregateInputType | true
    }

  export interface testcaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testcase'], meta: { name: 'testcase' } }
    /**
     * Find zero or one Testcase that matches the filter.
     * @param {testcaseFindUniqueArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testcaseFindUniqueArgs>(args: SelectSubset<T, testcaseFindUniqueArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testcase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testcaseFindUniqueOrThrowArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testcaseFindUniqueOrThrowArgs>(args: SelectSubset<T, testcaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseFindFirstArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testcaseFindFirstArgs>(args?: SelectSubset<T, testcaseFindFirstArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testcase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseFindFirstOrThrowArgs} args - Arguments to find a Testcase
     * @example
     * // Get one Testcase
     * const testcase = await prisma.testcase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testcaseFindFirstOrThrowArgs>(args?: SelectSubset<T, testcaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testcases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testcases
     * const testcases = await prisma.testcase.findMany()
     * 
     * // Get first 10 Testcases
     * const testcases = await prisma.testcase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testcaseWithIdOnly = await prisma.testcase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends testcaseFindManyArgs>(args?: SelectSubset<T, testcaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testcase.
     * @param {testcaseCreateArgs} args - Arguments to create a Testcase.
     * @example
     * // Create one Testcase
     * const Testcase = await prisma.testcase.create({
     *   data: {
     *     // ... data to create a Testcase
     *   }
     * })
     * 
     */
    create<T extends testcaseCreateArgs>(args: SelectSubset<T, testcaseCreateArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testcases.
     * @param {testcaseCreateManyArgs} args - Arguments to create many Testcases.
     * @example
     * // Create many Testcases
     * const testcase = await prisma.testcase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testcaseCreateManyArgs>(args?: SelectSubset<T, testcaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testcases and returns the data saved in the database.
     * @param {testcaseCreateManyAndReturnArgs} args - Arguments to create many Testcases.
     * @example
     * // Create many Testcases
     * const testcase = await prisma.testcase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testcases and only return the `id`
     * const testcaseWithIdOnly = await prisma.testcase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends testcaseCreateManyAndReturnArgs>(args?: SelectSubset<T, testcaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testcase.
     * @param {testcaseDeleteArgs} args - Arguments to delete one Testcase.
     * @example
     * // Delete one Testcase
     * const Testcase = await prisma.testcase.delete({
     *   where: {
     *     // ... filter to delete one Testcase
     *   }
     * })
     * 
     */
    delete<T extends testcaseDeleteArgs>(args: SelectSubset<T, testcaseDeleteArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testcase.
     * @param {testcaseUpdateArgs} args - Arguments to update one Testcase.
     * @example
     * // Update one Testcase
     * const testcase = await prisma.testcase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testcaseUpdateArgs>(args: SelectSubset<T, testcaseUpdateArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testcases.
     * @param {testcaseDeleteManyArgs} args - Arguments to filter Testcases to delete.
     * @example
     * // Delete a few Testcases
     * const { count } = await prisma.testcase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testcaseDeleteManyArgs>(args?: SelectSubset<T, testcaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testcases
     * const testcase = await prisma.testcase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testcaseUpdateManyArgs>(args: SelectSubset<T, testcaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testcases and returns the data updated in the database.
     * @param {testcaseUpdateManyAndReturnArgs} args - Arguments to update many Testcases.
     * @example
     * // Update many Testcases
     * const testcase = await prisma.testcase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testcases and only return the `id`
     * const testcaseWithIdOnly = await prisma.testcase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends testcaseUpdateManyAndReturnArgs>(args: SelectSubset<T, testcaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testcase.
     * @param {testcaseUpsertArgs} args - Arguments to update or create a Testcase.
     * @example
     * // Update or create a Testcase
     * const testcase = await prisma.testcase.upsert({
     *   create: {
     *     // ... data to create a Testcase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testcase we want to update
     *   }
     * })
     */
    upsert<T extends testcaseUpsertArgs>(args: SelectSubset<T, testcaseUpsertArgs<ExtArgs>>): Prisma__testcaseClient<$Result.GetResult<Prisma.$testcasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testcases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseCountArgs} args - Arguments to filter Testcases to count.
     * @example
     * // Count the number of Testcases
     * const count = await prisma.testcase.count({
     *   where: {
     *     // ... the filter for the Testcases we want to count
     *   }
     * })
    **/
    count<T extends testcaseCountArgs>(
      args?: Subset<T, testcaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestcaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestcaseAggregateArgs>(args: Subset<T, TestcaseAggregateArgs>): Prisma.PrismaPromise<GetTestcaseAggregateType<T>>

    /**
     * Group by Testcase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testcaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends testcaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testcaseGroupByArgs['orderBy'] }
        : { orderBy?: testcaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, testcaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestcaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testcase model
   */
  readonly fields: testcaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testcase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testcaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends submissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, submissionDefaultArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the testcase model
   */
  interface testcaseFieldRefs {
    readonly id: FieldRef<"testcase", 'String'>
    readonly submissionId: FieldRef<"testcase", 'String'>
    readonly testCase: FieldRef<"testcase", 'Int'>
    readonly passed: FieldRef<"testcase", 'Boolean'>
    readonly stdout: FieldRef<"testcase", 'String'>
    readonly expected: FieldRef<"testcase", 'String'>
    readonly stderr: FieldRef<"testcase", 'String'>
    readonly compileOutput: FieldRef<"testcase", 'String'>
    readonly status: FieldRef<"testcase", 'submissionStatus'>
    readonly memory: FieldRef<"testcase", 'String'>
    readonly time: FieldRef<"testcase", 'String'>
    readonly createdAt: FieldRef<"testcase", 'DateTime'>
    readonly updatedAt: FieldRef<"testcase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * testcase findUnique
   */
  export type testcaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcase to fetch.
     */
    where: testcaseWhereUniqueInput
  }

  /**
   * testcase findUniqueOrThrow
   */
  export type testcaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcase to fetch.
     */
    where: testcaseWhereUniqueInput
  }

  /**
   * testcase findFirst
   */
  export type testcaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcase to fetch.
     */
    where?: testcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcases.
     */
    cursor?: testcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testcases.
     */
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * testcase findFirstOrThrow
   */
  export type testcaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcase to fetch.
     */
    where?: testcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testcases.
     */
    cursor?: testcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testcases.
     */
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * testcase findMany
   */
  export type testcaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter, which testcases to fetch.
     */
    where?: testcaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testcases to fetch.
     */
    orderBy?: testcaseOrderByWithRelationInput | testcaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testcases.
     */
    cursor?: testcaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testcases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testcases.
     */
    skip?: number
    distinct?: TestcaseScalarFieldEnum | TestcaseScalarFieldEnum[]
  }

  /**
   * testcase create
   */
  export type testcaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * The data needed to create a testcase.
     */
    data: XOR<testcaseCreateInput, testcaseUncheckedCreateInput>
  }

  /**
   * testcase createMany
   */
  export type testcaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testcases.
     */
    data: testcaseCreateManyInput | testcaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testcase createManyAndReturn
   */
  export type testcaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * The data used to create many testcases.
     */
    data: testcaseCreateManyInput | testcaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * testcase update
   */
  export type testcaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * The data needed to update a testcase.
     */
    data: XOR<testcaseUpdateInput, testcaseUncheckedUpdateInput>
    /**
     * Choose, which testcase to update.
     */
    where: testcaseWhereUniqueInput
  }

  /**
   * testcase updateMany
   */
  export type testcaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testcases.
     */
    data: XOR<testcaseUpdateManyMutationInput, testcaseUncheckedUpdateManyInput>
    /**
     * Filter which testcases to update
     */
    where?: testcaseWhereInput
    /**
     * Limit how many testcases to update.
     */
    limit?: number
  }

  /**
   * testcase updateManyAndReturn
   */
  export type testcaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * The data used to update testcases.
     */
    data: XOR<testcaseUpdateManyMutationInput, testcaseUncheckedUpdateManyInput>
    /**
     * Filter which testcases to update
     */
    where?: testcaseWhereInput
    /**
     * Limit how many testcases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * testcase upsert
   */
  export type testcaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * The filter to search for the testcase to update in case it exists.
     */
    where: testcaseWhereUniqueInput
    /**
     * In case the testcase found by the `where` argument doesn't exist, create a new testcase with this data.
     */
    create: XOR<testcaseCreateInput, testcaseUncheckedCreateInput>
    /**
     * In case the testcase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testcaseUpdateInput, testcaseUncheckedUpdateInput>
  }

  /**
   * testcase delete
   */
  export type testcaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
    /**
     * Filter which testcase to delete.
     */
    where: testcaseWhereUniqueInput
  }

  /**
   * testcase deleteMany
   */
  export type testcaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testcases to delete
     */
    where?: testcaseWhereInput
    /**
     * Limit how many testcases to delete.
     */
    limit?: number
  }

  /**
   * testcase without action
   */
  export type testcaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testcase
     */
    select?: testcaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testcase
     */
    omit?: testcaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: testcaseInclude<ExtArgs> | null
  }


  /**
   * Model problemSolved
   */

  export type AggregateProblemSolved = {
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  export type ProblemSolvedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemSolvedMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemSolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemSolved to aggregate.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problemSolveds
    **/
    _count?: true | ProblemSolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemSolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type GetProblemSolvedAggregateType<T extends ProblemSolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemSolved[P]>
      : GetScalarType<T[P], AggregateProblemSolved[P]>
  }




  export type problemSolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithAggregationInput | problemSolvedOrderByWithAggregationInput[]
    by: ProblemSolvedScalarFieldEnum[] | ProblemSolvedScalarFieldEnum
    having?: problemSolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemSolvedCountAggregateInputType | true
    _min?: ProblemSolvedMinAggregateInputType
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type ProblemSolvedGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  type GetProblemSolvedGroupByPayload<T extends problemSolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemSolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemSolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
        }
      >
    >


  export type problemSolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type problemSolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemSolved"]>
  export type problemSolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }
  export type problemSolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }
  export type problemSolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }

  export type $problemSolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problemSolved"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      problem: Prisma.$problemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemSolved"]>
    composites: {}
  }

  type problemSolvedGetPayload<S extends boolean | null | undefined | problemSolvedDefaultArgs> = $Result.GetResult<Prisma.$problemSolvedPayload, S>

  type problemSolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problemSolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemSolvedCountAggregateInputType | true
    }

  export interface problemSolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problemSolved'], meta: { name: 'problemSolved' } }
    /**
     * Find zero or one ProblemSolved that matches the filter.
     * @param {problemSolvedFindUniqueArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problemSolvedFindUniqueArgs>(args: SelectSubset<T, problemSolvedFindUniqueArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problemSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problemSolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, problemSolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindFirstArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problemSolvedFindFirstArgs>(args?: SelectSubset<T, problemSolvedFindFirstArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problemSolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, problemSolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany()
     * 
     * // Get first 10 ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends problemSolvedFindManyArgs>(args?: SelectSubset<T, problemSolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemSolved.
     * @param {problemSolvedCreateArgs} args - Arguments to create a ProblemSolved.
     * @example
     * // Create one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.create({
     *   data: {
     *     // ... data to create a ProblemSolved
     *   }
     * })
     * 
     */
    create<T extends problemSolvedCreateArgs>(args: SelectSubset<T, problemSolvedCreateArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemSolveds.
     * @param {problemSolvedCreateManyArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problemSolvedCreateManyArgs>(args?: SelectSubset<T, problemSolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemSolveds and returns the data saved in the database.
     * @param {problemSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends problemSolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, problemSolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemSolved.
     * @param {problemSolvedDeleteArgs} args - Arguments to delete one ProblemSolved.
     * @example
     * // Delete one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemSolved
     *   }
     * })
     * 
     */
    delete<T extends problemSolvedDeleteArgs>(args: SelectSubset<T, problemSolvedDeleteArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemSolved.
     * @param {problemSolvedUpdateArgs} args - Arguments to update one ProblemSolved.
     * @example
     * // Update one ProblemSolved
     * const problemSolved = await prisma.problemSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problemSolvedUpdateArgs>(args: SelectSubset<T, problemSolvedUpdateArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemSolveds.
     * @param {problemSolvedDeleteManyArgs} args - Arguments to filter ProblemSolveds to delete.
     * @example
     * // Delete a few ProblemSolveds
     * const { count } = await prisma.problemSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problemSolvedDeleteManyArgs>(args?: SelectSubset<T, problemSolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problemSolvedUpdateManyArgs>(args: SelectSubset<T, problemSolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds and returns the data updated in the database.
     * @param {problemSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemSolveds.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends problemSolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, problemSolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemSolved.
     * @param {problemSolvedUpsertArgs} args - Arguments to update or create a ProblemSolved.
     * @example
     * // Update or create a ProblemSolved
     * const problemSolved = await prisma.problemSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemSolved we want to update
     *   }
     * })
     */
    upsert<T extends problemSolvedUpsertArgs>(args: SelectSubset<T, problemSolvedUpsertArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedCountArgs} args - Arguments to filter ProblemSolveds to count.
     * @example
     * // Count the number of ProblemSolveds
     * const count = await prisma.problemSolved.count({
     *   where: {
     *     // ... the filter for the ProblemSolveds we want to count
     *   }
     * })
    **/
    count<T extends problemSolvedCountArgs>(
      args?: Subset<T, problemSolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemSolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemSolvedAggregateArgs>(args: Subset<T, ProblemSolvedAggregateArgs>): Prisma.PrismaPromise<GetProblemSolvedAggregateType<T>>

    /**
     * Group by ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends problemSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problemSolvedGroupByArgs['orderBy'] }
        : { orderBy?: problemSolvedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, problemSolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problemSolved model
   */
  readonly fields: problemSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problemSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problemSolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends problemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, problemDefaultArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the problemSolved model
   */
  interface problemSolvedFieldRefs {
    readonly id: FieldRef<"problemSolved", 'String'>
    readonly userId: FieldRef<"problemSolved", 'String'>
    readonly problemId: FieldRef<"problemSolved", 'String'>
    readonly createdAt: FieldRef<"problemSolved", 'DateTime'>
    readonly updatedAt: FieldRef<"problemSolved", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * problemSolved findUnique
   */
  export type problemSolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved findUniqueOrThrow
   */
  export type problemSolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved findFirst
   */
  export type problemSolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved findFirstOrThrow
   */
  export type problemSolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved findMany
   */
  export type problemSolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolveds to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved create
   */
  export type problemSolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a problemSolved.
     */
    data: XOR<problemSolvedCreateInput, problemSolvedUncheckedCreateInput>
  }

  /**
   * problemSolved createMany
   */
  export type problemSolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problemSolveds.
     */
    data: problemSolvedCreateManyInput | problemSolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problemSolved createManyAndReturn
   */
  export type problemSolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * The data used to create many problemSolveds.
     */
    data: problemSolvedCreateManyInput | problemSolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemSolved update
   */
  export type problemSolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a problemSolved.
     */
    data: XOR<problemSolvedUpdateInput, problemSolvedUncheckedUpdateInput>
    /**
     * Choose, which problemSolved to update.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved updateMany
   */
  export type problemSolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problemSolveds.
     */
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which problemSolveds to update
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to update.
     */
    limit?: number
  }

  /**
   * problemSolved updateManyAndReturn
   */
  export type problemSolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * The data used to update problemSolveds.
     */
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which problemSolveds to update
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemSolved upsert
   */
  export type problemSolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the problemSolved to update in case it exists.
     */
    where: problemSolvedWhereUniqueInput
    /**
     * In case the problemSolved found by the `where` argument doesn't exist, create a new problemSolved with this data.
     */
    create: XOR<problemSolvedCreateInput, problemSolvedUncheckedCreateInput>
    /**
     * In case the problemSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problemSolvedUpdateInput, problemSolvedUncheckedUpdateInput>
  }

  /**
   * problemSolved delete
   */
  export type problemSolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter which problemSolved to delete.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved deleteMany
   */
  export type problemSolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemSolveds to delete
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to delete.
     */
    limit?: number
  }

  /**
   * problemSolved without action
   */
  export type problemSolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
  }


  /**
   * Model playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    basePrice: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    basePrice: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    coverImage: string | null
    isPaid: boolean | null
    basePrice: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    coverImage: string | null
    isPaid: boolean | null
    basePrice: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    description: number
    coverImage: number
    isPaid: number
    basePrice: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    basePrice?: true
  }

  export type PlaylistSumAggregateInputType = {
    basePrice?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coverImage?: true
    isPaid?: true
    basePrice?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coverImage?: true
    isPaid?: true
    basePrice?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coverImage?: true
    isPaid?: true
    basePrice?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlist to aggregate.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type playlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playlistWhereInput
    orderBy?: playlistOrderByWithAggregationInput | playlistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: playlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    name: string
    description: string | null
    coverImage: string | null
    isPaid: boolean
    basePrice: number | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends playlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type playlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    isPaid?: boolean
    basePrice?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | playlist$problemsArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    purchases?: boolean | playlist$purchasesArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type playlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    isPaid?: boolean
    basePrice?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type playlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    isPaid?: boolean
    basePrice?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type playlistSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    isPaid?: boolean
    basePrice?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type playlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "coverImage" | "isPaid" | "basePrice" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type playlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | playlist$problemsArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    purchases?: boolean | playlist$purchasesArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type playlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type playlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $playlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playlist"
    objects: {
      problems: Prisma.$problemInPlaylistPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
      purchases: Prisma.$PlaylistPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      coverImage: string | null
      isPaid: boolean
      basePrice: number | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type playlistGetPayload<S extends boolean | null | undefined | playlistDefaultArgs> = $Result.GetResult<Prisma.$playlistPayload, S>

  type playlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface playlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playlist'], meta: { name: 'playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {playlistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playlistFindUniqueArgs>(args: SelectSubset<T, playlistFindUniqueArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playlistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playlistFindUniqueOrThrowArgs>(args: SelectSubset<T, playlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playlistFindFirstArgs>(args?: SelectSubset<T, playlistFindFirstArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playlistFindFirstOrThrowArgs>(args?: SelectSubset<T, playlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playlistFindManyArgs>(args?: SelectSubset<T, playlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {playlistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends playlistCreateArgs>(args: SelectSubset<T, playlistCreateArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {playlistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playlistCreateManyArgs>(args?: SelectSubset<T, playlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {playlistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends playlistCreateManyAndReturnArgs>(args?: SelectSubset<T, playlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {playlistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends playlistDeleteArgs>(args: SelectSubset<T, playlistDeleteArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {playlistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playlistUpdateArgs>(args: SelectSubset<T, playlistUpdateArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {playlistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playlistDeleteManyArgs>(args?: SelectSubset<T, playlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playlistUpdateManyArgs>(args: SelectSubset<T, playlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {playlistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends playlistUpdateManyAndReturnArgs>(args: SelectSubset<T, playlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {playlistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends playlistUpsertArgs>(args: SelectSubset<T, playlistUpsertArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends playlistCountArgs>(
      args?: Subset<T, playlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playlistGroupByArgs['orderBy'] }
        : { orderBy?: playlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playlist model
   */
  readonly fields: playlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends playlist$problemsArgs<ExtArgs> = {}>(args?: Subset<T, playlist$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchases<T extends playlist$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, playlist$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the playlist model
   */
  interface playlistFieldRefs {
    readonly id: FieldRef<"playlist", 'String'>
    readonly name: FieldRef<"playlist", 'String'>
    readonly description: FieldRef<"playlist", 'String'>
    readonly coverImage: FieldRef<"playlist", 'String'>
    readonly isPaid: FieldRef<"playlist", 'Boolean'>
    readonly basePrice: FieldRef<"playlist", 'Float'>
    readonly userId: FieldRef<"playlist", 'String'>
    readonly createdAt: FieldRef<"playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * playlist findUnique
   */
  export type playlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where: playlistWhereUniqueInput
  }

  /**
   * playlist findUniqueOrThrow
   */
  export type playlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where: playlistWhereUniqueInput
  }

  /**
   * playlist findFirst
   */
  export type playlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * playlist findFirstOrThrow
   */
  export type playlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlist to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * playlist findMany
   */
  export type playlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter, which playlists to fetch.
     */
    where?: playlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playlists to fetch.
     */
    orderBy?: playlistOrderByWithRelationInput | playlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playlists.
     */
    cursor?: playlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * playlist create
   */
  export type playlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The data needed to create a playlist.
     */
    data: XOR<playlistCreateInput, playlistUncheckedCreateInput>
  }

  /**
   * playlist createMany
   */
  export type playlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playlists.
     */
    data: playlistCreateManyInput | playlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playlist createManyAndReturn
   */
  export type playlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * The data used to create many playlists.
     */
    data: playlistCreateManyInput | playlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * playlist update
   */
  export type playlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The data needed to update a playlist.
     */
    data: XOR<playlistUpdateInput, playlistUncheckedUpdateInput>
    /**
     * Choose, which playlist to update.
     */
    where: playlistWhereUniqueInput
  }

  /**
   * playlist updateMany
   */
  export type playlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playlists.
     */
    data: XOR<playlistUpdateManyMutationInput, playlistUncheckedUpdateManyInput>
    /**
     * Filter which playlists to update
     */
    where?: playlistWhereInput
    /**
     * Limit how many playlists to update.
     */
    limit?: number
  }

  /**
   * playlist updateManyAndReturn
   */
  export type playlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * The data used to update playlists.
     */
    data: XOR<playlistUpdateManyMutationInput, playlistUncheckedUpdateManyInput>
    /**
     * Filter which playlists to update
     */
    where?: playlistWhereInput
    /**
     * Limit how many playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * playlist upsert
   */
  export type playlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * The filter to search for the playlist to update in case it exists.
     */
    where: playlistWhereUniqueInput
    /**
     * In case the playlist found by the `where` argument doesn't exist, create a new playlist with this data.
     */
    create: XOR<playlistCreateInput, playlistUncheckedCreateInput>
    /**
     * In case the playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playlistUpdateInput, playlistUncheckedUpdateInput>
  }

  /**
   * playlist delete
   */
  export type playlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
    /**
     * Filter which playlist to delete.
     */
    where: playlistWhereUniqueInput
  }

  /**
   * playlist deleteMany
   */
  export type playlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playlists to delete
     */
    where?: playlistWhereInput
    /**
     * Limit how many playlists to delete.
     */
    limit?: number
  }

  /**
   * playlist.problems
   */
  export type playlist$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    where?: problemInPlaylistWhereInput
    orderBy?: problemInPlaylistOrderByWithRelationInput | problemInPlaylistOrderByWithRelationInput[]
    cursor?: problemInPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * playlist.purchases
   */
  export type playlist$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    where?: PlaylistPurchaseWhereInput
    orderBy?: PlaylistPurchaseOrderByWithRelationInput | PlaylistPurchaseOrderByWithRelationInput[]
    cursor?: PlaylistPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistPurchaseScalarFieldEnum | PlaylistPurchaseScalarFieldEnum[]
  }

  /**
   * playlist without action
   */
  export type playlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playlist
     */
    select?: playlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playlist
     */
    omit?: playlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playlistInclude<ExtArgs> | null
  }


  /**
   * Model problemInPlaylist
   */

  export type AggregateProblemInPlaylist = {
    _count: ProblemInPlaylistCountAggregateOutputType | null
    _min: ProblemInPlaylistMinAggregateOutputType | null
    _max: ProblemInPlaylistMaxAggregateOutputType | null
  }

  export type ProblemInPlaylistMinAggregateOutputType = {
    id: string | null
    playListId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInPlaylistMaxAggregateOutputType = {
    id: string | null
    playListId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemInPlaylistCountAggregateOutputType = {
    id: number
    playListId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemInPlaylistMinAggregateInputType = {
    id?: true
    playListId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInPlaylistMaxAggregateInputType = {
    id?: true
    playListId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemInPlaylistCountAggregateInputType = {
    id?: true
    playListId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemInPlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemInPlaylist to aggregate.
     */
    where?: problemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemInPlaylists to fetch.
     */
    orderBy?: problemInPlaylistOrderByWithRelationInput | problemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problemInPlaylists
    **/
    _count?: true | ProblemInPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemInPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemInPlaylistMaxAggregateInputType
  }

  export type GetProblemInPlaylistAggregateType<T extends ProblemInPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemInPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemInPlaylist[P]>
      : GetScalarType<T[P], AggregateProblemInPlaylist[P]>
  }




  export type problemInPlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemInPlaylistWhereInput
    orderBy?: problemInPlaylistOrderByWithAggregationInput | problemInPlaylistOrderByWithAggregationInput[]
    by: ProblemInPlaylistScalarFieldEnum[] | ProblemInPlaylistScalarFieldEnum
    having?: problemInPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemInPlaylistCountAggregateInputType | true
    _min?: ProblemInPlaylistMinAggregateInputType
    _max?: ProblemInPlaylistMaxAggregateInputType
  }

  export type ProblemInPlaylistGroupByOutputType = {
    id: string
    playListId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemInPlaylistCountAggregateOutputType | null
    _min: ProblemInPlaylistMinAggregateOutputType | null
    _max: ProblemInPlaylistMaxAggregateOutputType | null
  }

  type GetProblemInPlaylistGroupByPayload<T extends problemInPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemInPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemInPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemInPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemInPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type problemInPlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playListId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type problemInPlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playListId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type problemInPlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playListId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemInPlaylist"]>

  export type problemInPlaylistSelectScalar = {
    id?: boolean
    playListId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type problemInPlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playListId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemInPlaylist"]>
  export type problemInPlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }
  export type problemInPlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }
  export type problemInPlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
    problem?: boolean | problemDefaultArgs<ExtArgs>
  }

  export type $problemInPlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problemInPlaylist"
    objects: {
      playlist: Prisma.$playlistPayload<ExtArgs>
      problem: Prisma.$problemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playListId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemInPlaylist"]>
    composites: {}
  }

  type problemInPlaylistGetPayload<S extends boolean | null | undefined | problemInPlaylistDefaultArgs> = $Result.GetResult<Prisma.$problemInPlaylistPayload, S>

  type problemInPlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problemInPlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemInPlaylistCountAggregateInputType | true
    }

  export interface problemInPlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problemInPlaylist'], meta: { name: 'problemInPlaylist' } }
    /**
     * Find zero or one ProblemInPlaylist that matches the filter.
     * @param {problemInPlaylistFindUniqueArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problemInPlaylistFindUniqueArgs>(args: SelectSubset<T, problemInPlaylistFindUniqueArgs<ExtArgs>>): Prisma__problemInPlaylistClient<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemInPlaylist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problemInPlaylistFindUniqueOrThrowArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problemInPlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, problemInPlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problemInPlaylistClient<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemInPlaylistFindFirstArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problemInPlaylistFindFirstArgs>(args?: SelectSubset<T, problemInPlaylistFindFirstArgs<ExtArgs>>): Prisma__problemInPlaylistClient<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemInPlaylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemInPlaylistFindFirstOrThrowArgs} args - Arguments to find a ProblemInPlaylist
     * @example
     * // Get one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problemInPlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, problemInPlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__problemInPlaylistClient<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemInPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemInPlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemInPlaylists
     * const problemInPlaylists = await prisma.problemInPlaylist.findMany()
     * 
     * // Get first 10 ProblemInPlaylists
     * const problemInPlaylists = await prisma.problemInPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends problemInPlaylistFindManyArgs>(args?: SelectSubset<T, problemInPlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemInPlaylist.
     * @param {problemInPlaylistCreateArgs} args - Arguments to create a ProblemInPlaylist.
     * @example
     * // Create one ProblemInPlaylist
     * const ProblemInPlaylist = await prisma.problemInPlaylist.create({
     *   data: {
     *     // ... data to create a ProblemInPlaylist
     *   }
     * })
     * 
     */
    create<T extends problemInPlaylistCreateArgs>(args: SelectSubset<T, problemInPlaylistCreateArgs<ExtArgs>>): Prisma__problemInPlaylistClient<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemInPlaylists.
     * @param {problemInPlaylistCreateManyArgs} args - Arguments to create many ProblemInPlaylists.
     * @example
     * // Create many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problemInPlaylistCreateManyArgs>(args?: SelectSubset<T, problemInPlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemInPlaylists and returns the data saved in the database.
     * @param {problemInPlaylistCreateManyAndReturnArgs} args - Arguments to create many ProblemInPlaylists.
     * @example
     * // Create many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemInPlaylists and only return the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends problemInPlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, problemInPlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemInPlaylist.
     * @param {problemInPlaylistDeleteArgs} args - Arguments to delete one ProblemInPlaylist.
     * @example
     * // Delete one ProblemInPlaylist
     * const ProblemInPlaylist = await prisma.problemInPlaylist.delete({
     *   where: {
     *     // ... filter to delete one ProblemInPlaylist
     *   }
     * })
     * 
     */
    delete<T extends problemInPlaylistDeleteArgs>(args: SelectSubset<T, problemInPlaylistDeleteArgs<ExtArgs>>): Prisma__problemInPlaylistClient<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemInPlaylist.
     * @param {problemInPlaylistUpdateArgs} args - Arguments to update one ProblemInPlaylist.
     * @example
     * // Update one ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problemInPlaylistUpdateArgs>(args: SelectSubset<T, problemInPlaylistUpdateArgs<ExtArgs>>): Prisma__problemInPlaylistClient<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemInPlaylists.
     * @param {problemInPlaylistDeleteManyArgs} args - Arguments to filter ProblemInPlaylists to delete.
     * @example
     * // Delete a few ProblemInPlaylists
     * const { count } = await prisma.problemInPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problemInPlaylistDeleteManyArgs>(args?: SelectSubset<T, problemInPlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemInPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problemInPlaylistUpdateManyArgs>(args: SelectSubset<T, problemInPlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemInPlaylists and returns the data updated in the database.
     * @param {problemInPlaylistUpdateManyAndReturnArgs} args - Arguments to update many ProblemInPlaylists.
     * @example
     * // Update many ProblemInPlaylists
     * const problemInPlaylist = await prisma.problemInPlaylist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemInPlaylists and only return the `id`
     * const problemInPlaylistWithIdOnly = await prisma.problemInPlaylist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends problemInPlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, problemInPlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemInPlaylist.
     * @param {problemInPlaylistUpsertArgs} args - Arguments to update or create a ProblemInPlaylist.
     * @example
     * // Update or create a ProblemInPlaylist
     * const problemInPlaylist = await prisma.problemInPlaylist.upsert({
     *   create: {
     *     // ... data to create a ProblemInPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemInPlaylist we want to update
     *   }
     * })
     */
    upsert<T extends problemInPlaylistUpsertArgs>(args: SelectSubset<T, problemInPlaylistUpsertArgs<ExtArgs>>): Prisma__problemInPlaylistClient<$Result.GetResult<Prisma.$problemInPlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemInPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemInPlaylistCountArgs} args - Arguments to filter ProblemInPlaylists to count.
     * @example
     * // Count the number of ProblemInPlaylists
     * const count = await prisma.problemInPlaylist.count({
     *   where: {
     *     // ... the filter for the ProblemInPlaylists we want to count
     *   }
     * })
    **/
    count<T extends problemInPlaylistCountArgs>(
      args?: Subset<T, problemInPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemInPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemInPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemInPlaylistAggregateArgs>(args: Subset<T, ProblemInPlaylistAggregateArgs>): Prisma.PrismaPromise<GetProblemInPlaylistAggregateType<T>>

    /**
     * Group by ProblemInPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemInPlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends problemInPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problemInPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: problemInPlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, problemInPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemInPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problemInPlaylist model
   */
  readonly fields: problemInPlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problemInPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problemInPlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends playlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playlistDefaultArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends problemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, problemDefaultArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the problemInPlaylist model
   */
  interface problemInPlaylistFieldRefs {
    readonly id: FieldRef<"problemInPlaylist", 'String'>
    readonly playListId: FieldRef<"problemInPlaylist", 'String'>
    readonly problemId: FieldRef<"problemInPlaylist", 'String'>
    readonly createdAt: FieldRef<"problemInPlaylist", 'DateTime'>
    readonly updatedAt: FieldRef<"problemInPlaylist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * problemInPlaylist findUnique
   */
  export type problemInPlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which problemInPlaylist to fetch.
     */
    where: problemInPlaylistWhereUniqueInput
  }

  /**
   * problemInPlaylist findUniqueOrThrow
   */
  export type problemInPlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which problemInPlaylist to fetch.
     */
    where: problemInPlaylistWhereUniqueInput
  }

  /**
   * problemInPlaylist findFirst
   */
  export type problemInPlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which problemInPlaylist to fetch.
     */
    where?: problemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemInPlaylists to fetch.
     */
    orderBy?: problemInPlaylistOrderByWithRelationInput | problemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemInPlaylists.
     */
    cursor?: problemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemInPlaylists.
     */
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * problemInPlaylist findFirstOrThrow
   */
  export type problemInPlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which problemInPlaylist to fetch.
     */
    where?: problemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemInPlaylists to fetch.
     */
    orderBy?: problemInPlaylistOrderByWithRelationInput | problemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemInPlaylists.
     */
    cursor?: problemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemInPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemInPlaylists.
     */
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * problemInPlaylist findMany
   */
  export type problemInPlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter, which problemInPlaylists to fetch.
     */
    where?: problemInPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemInPlaylists to fetch.
     */
    orderBy?: problemInPlaylistOrderByWithRelationInput | problemInPlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problemInPlaylists.
     */
    cursor?: problemInPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemInPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemInPlaylists.
     */
    skip?: number
    distinct?: ProblemInPlaylistScalarFieldEnum | ProblemInPlaylistScalarFieldEnum[]
  }

  /**
   * problemInPlaylist create
   */
  export type problemInPlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a problemInPlaylist.
     */
    data: XOR<problemInPlaylistCreateInput, problemInPlaylistUncheckedCreateInput>
  }

  /**
   * problemInPlaylist createMany
   */
  export type problemInPlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problemInPlaylists.
     */
    data: problemInPlaylistCreateManyInput | problemInPlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problemInPlaylist createManyAndReturn
   */
  export type problemInPlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many problemInPlaylists.
     */
    data: problemInPlaylistCreateManyInput | problemInPlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemInPlaylist update
   */
  export type problemInPlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a problemInPlaylist.
     */
    data: XOR<problemInPlaylistUpdateInput, problemInPlaylistUncheckedUpdateInput>
    /**
     * Choose, which problemInPlaylist to update.
     */
    where: problemInPlaylistWhereUniqueInput
  }

  /**
   * problemInPlaylist updateMany
   */
  export type problemInPlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problemInPlaylists.
     */
    data: XOR<problemInPlaylistUpdateManyMutationInput, problemInPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which problemInPlaylists to update
     */
    where?: problemInPlaylistWhereInput
    /**
     * Limit how many problemInPlaylists to update.
     */
    limit?: number
  }

  /**
   * problemInPlaylist updateManyAndReturn
   */
  export type problemInPlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * The data used to update problemInPlaylists.
     */
    data: XOR<problemInPlaylistUpdateManyMutationInput, problemInPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which problemInPlaylists to update
     */
    where?: problemInPlaylistWhereInput
    /**
     * Limit how many problemInPlaylists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemInPlaylist upsert
   */
  export type problemInPlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the problemInPlaylist to update in case it exists.
     */
    where: problemInPlaylistWhereUniqueInput
    /**
     * In case the problemInPlaylist found by the `where` argument doesn't exist, create a new problemInPlaylist with this data.
     */
    create: XOR<problemInPlaylistCreateInput, problemInPlaylistUncheckedCreateInput>
    /**
     * In case the problemInPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problemInPlaylistUpdateInput, problemInPlaylistUncheckedUpdateInput>
  }

  /**
   * problemInPlaylist delete
   */
  export type problemInPlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
    /**
     * Filter which problemInPlaylist to delete.
     */
    where: problemInPlaylistWhereUniqueInput
  }

  /**
   * problemInPlaylist deleteMany
   */
  export type problemInPlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemInPlaylists to delete
     */
    where?: problemInPlaylistWhereInput
    /**
     * Limit how many problemInPlaylists to delete.
     */
    limit?: number
  }

  /**
   * problemInPlaylist without action
   */
  export type problemInPlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemInPlaylist
     */
    select?: problemInPlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemInPlaylist
     */
    omit?: problemInPlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInPlaylistInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistPurchase
   */

  export type AggregatePlaylistPurchase = {
    _count: PlaylistPurchaseCountAggregateOutputType | null
    _avg: PlaylistPurchaseAvgAggregateOutputType | null
    _sum: PlaylistPurchaseSumAggregateOutputType | null
    _min: PlaylistPurchaseMinAggregateOutputType | null
    _max: PlaylistPurchaseMaxAggregateOutputType | null
  }

  export type PlaylistPurchaseAvgAggregateOutputType = {
    amount: number | null
  }

  export type PlaylistPurchaseSumAggregateOutputType = {
    amount: number | null
  }

  export type PlaylistPurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    playlistId: string | null
    playlistName: string | null
    razorpayPaymentLinkId: string | null
    razorpayPaymentLinkStatus: string | null
    razorpayPaymentLinkRefereceId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    purchasedAt: Date | null
    amount: number | null
  }

  export type PlaylistPurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    playlistId: string | null
    playlistName: string | null
    razorpayPaymentLinkId: string | null
    razorpayPaymentLinkStatus: string | null
    razorpayPaymentLinkRefereceId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    purchasedAt: Date | null
    amount: number | null
  }

  export type PlaylistPurchaseCountAggregateOutputType = {
    id: number
    userId: number
    playlistId: number
    playlistName: number
    razorpayPaymentLinkId: number
    razorpayPaymentLinkStatus: number
    razorpayPaymentLinkRefereceId: number
    razorpayPaymentId: number
    razorpaySignature: number
    purchasedAt: number
    amount: number
    _all: number
  }


  export type PlaylistPurchaseAvgAggregateInputType = {
    amount?: true
  }

  export type PlaylistPurchaseSumAggregateInputType = {
    amount?: true
  }

  export type PlaylistPurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    playlistId?: true
    playlistName?: true
    razorpayPaymentLinkId?: true
    razorpayPaymentLinkStatus?: true
    razorpayPaymentLinkRefereceId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    purchasedAt?: true
    amount?: true
  }

  export type PlaylistPurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    playlistId?: true
    playlistName?: true
    razorpayPaymentLinkId?: true
    razorpayPaymentLinkStatus?: true
    razorpayPaymentLinkRefereceId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    purchasedAt?: true
    amount?: true
  }

  export type PlaylistPurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    playlistId?: true
    playlistName?: true
    razorpayPaymentLinkId?: true
    razorpayPaymentLinkStatus?: true
    razorpayPaymentLinkRefereceId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    purchasedAt?: true
    amount?: true
    _all?: true
  }

  export type PlaylistPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistPurchase to aggregate.
     */
    where?: PlaylistPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistPurchases to fetch.
     */
    orderBy?: PlaylistPurchaseOrderByWithRelationInput | PlaylistPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistPurchases
    **/
    _count?: true | PlaylistPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistPurchaseMaxAggregateInputType
  }

  export type GetPlaylistPurchaseAggregateType<T extends PlaylistPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistPurchase[P]>
      : GetScalarType<T[P], AggregatePlaylistPurchase[P]>
  }




  export type PlaylistPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistPurchaseWhereInput
    orderBy?: PlaylistPurchaseOrderByWithAggregationInput | PlaylistPurchaseOrderByWithAggregationInput[]
    by: PlaylistPurchaseScalarFieldEnum[] | PlaylistPurchaseScalarFieldEnum
    having?: PlaylistPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistPurchaseCountAggregateInputType | true
    _avg?: PlaylistPurchaseAvgAggregateInputType
    _sum?: PlaylistPurchaseSumAggregateInputType
    _min?: PlaylistPurchaseMinAggregateInputType
    _max?: PlaylistPurchaseMaxAggregateInputType
  }

  export type PlaylistPurchaseGroupByOutputType = {
    id: string
    userId: string
    playlistId: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    purchasedAt: Date
    amount: number
    _count: PlaylistPurchaseCountAggregateOutputType | null
    _avg: PlaylistPurchaseAvgAggregateOutputType | null
    _sum: PlaylistPurchaseSumAggregateOutputType | null
    _min: PlaylistPurchaseMinAggregateOutputType | null
    _max: PlaylistPurchaseMaxAggregateOutputType | null
  }

  type GetPlaylistPurchaseGroupByPayload<T extends PlaylistPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    playlistId?: boolean
    playlistName?: boolean
    razorpayPaymentLinkId?: boolean
    razorpayPaymentLinkStatus?: boolean
    razorpayPaymentLinkRefereceId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    purchasedAt?: boolean
    amount?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistPurchase"]>

  export type PlaylistPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    playlistId?: boolean
    playlistName?: boolean
    razorpayPaymentLinkId?: boolean
    razorpayPaymentLinkStatus?: boolean
    razorpayPaymentLinkRefereceId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    purchasedAt?: boolean
    amount?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistPurchase"]>

  export type PlaylistPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    playlistId?: boolean
    playlistName?: boolean
    razorpayPaymentLinkId?: boolean
    razorpayPaymentLinkStatus?: boolean
    razorpayPaymentLinkRefereceId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    purchasedAt?: boolean
    amount?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistPurchase"]>

  export type PlaylistPurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    playlistId?: boolean
    playlistName?: boolean
    razorpayPaymentLinkId?: boolean
    razorpayPaymentLinkStatus?: boolean
    razorpayPaymentLinkRefereceId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    purchasedAt?: boolean
    amount?: boolean
  }

  export type PlaylistPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "playlistId" | "playlistName" | "razorpayPaymentLinkId" | "razorpayPaymentLinkStatus" | "razorpayPaymentLinkRefereceId" | "razorpayPaymentId" | "razorpaySignature" | "purchasedAt" | "amount", ExtArgs["result"]["playlistPurchase"]>
  export type PlaylistPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
  }
  export type PlaylistPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
  }
  export type PlaylistPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    playlist?: boolean | playlistDefaultArgs<ExtArgs>
  }

  export type $PlaylistPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistPurchase"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      playlist: Prisma.$playlistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      playlistId: string
      playlistName: string
      razorpayPaymentLinkId: string
      razorpayPaymentLinkStatus: string
      razorpayPaymentLinkRefereceId: string
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      purchasedAt: Date
      amount: number
    }, ExtArgs["result"]["playlistPurchase"]>
    composites: {}
  }

  type PlaylistPurchaseGetPayload<S extends boolean | null | undefined | PlaylistPurchaseDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPurchasePayload, S>

  type PlaylistPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistPurchaseCountAggregateInputType | true
    }

  export interface PlaylistPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistPurchase'], meta: { name: 'PlaylistPurchase' } }
    /**
     * Find zero or one PlaylistPurchase that matches the filter.
     * @param {PlaylistPurchaseFindUniqueArgs} args - Arguments to find a PlaylistPurchase
     * @example
     * // Get one PlaylistPurchase
     * const playlistPurchase = await prisma.playlistPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistPurchaseFindUniqueArgs>(args: SelectSubset<T, PlaylistPurchaseFindUniqueArgs<ExtArgs>>): Prisma__PlaylistPurchaseClient<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistPurchaseFindUniqueOrThrowArgs} args - Arguments to find a PlaylistPurchase
     * @example
     * // Get one PlaylistPurchase
     * const playlistPurchase = await prisma.playlistPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistPurchaseClient<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistPurchaseFindFirstArgs} args - Arguments to find a PlaylistPurchase
     * @example
     * // Get one PlaylistPurchase
     * const playlistPurchase = await prisma.playlistPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistPurchaseFindFirstArgs>(args?: SelectSubset<T, PlaylistPurchaseFindFirstArgs<ExtArgs>>): Prisma__PlaylistPurchaseClient<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistPurchaseFindFirstOrThrowArgs} args - Arguments to find a PlaylistPurchase
     * @example
     * // Get one PlaylistPurchase
     * const playlistPurchase = await prisma.playlistPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistPurchaseClient<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistPurchases
     * const playlistPurchases = await prisma.playlistPurchase.findMany()
     * 
     * // Get first 10 PlaylistPurchases
     * const playlistPurchases = await prisma.playlistPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistPurchaseWithIdOnly = await prisma.playlistPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistPurchaseFindManyArgs>(args?: SelectSubset<T, PlaylistPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistPurchase.
     * @param {PlaylistPurchaseCreateArgs} args - Arguments to create a PlaylistPurchase.
     * @example
     * // Create one PlaylistPurchase
     * const PlaylistPurchase = await prisma.playlistPurchase.create({
     *   data: {
     *     // ... data to create a PlaylistPurchase
     *   }
     * })
     * 
     */
    create<T extends PlaylistPurchaseCreateArgs>(args: SelectSubset<T, PlaylistPurchaseCreateArgs<ExtArgs>>): Prisma__PlaylistPurchaseClient<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistPurchases.
     * @param {PlaylistPurchaseCreateManyArgs} args - Arguments to create many PlaylistPurchases.
     * @example
     * // Create many PlaylistPurchases
     * const playlistPurchase = await prisma.playlistPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistPurchaseCreateManyArgs>(args?: SelectSubset<T, PlaylistPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistPurchases and returns the data saved in the database.
     * @param {PlaylistPurchaseCreateManyAndReturnArgs} args - Arguments to create many PlaylistPurchases.
     * @example
     * // Create many PlaylistPurchases
     * const playlistPurchase = await prisma.playlistPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistPurchases and only return the `id`
     * const playlistPurchaseWithIdOnly = await prisma.playlistPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaylistPurchase.
     * @param {PlaylistPurchaseDeleteArgs} args - Arguments to delete one PlaylistPurchase.
     * @example
     * // Delete one PlaylistPurchase
     * const PlaylistPurchase = await prisma.playlistPurchase.delete({
     *   where: {
     *     // ... filter to delete one PlaylistPurchase
     *   }
     * })
     * 
     */
    delete<T extends PlaylistPurchaseDeleteArgs>(args: SelectSubset<T, PlaylistPurchaseDeleteArgs<ExtArgs>>): Prisma__PlaylistPurchaseClient<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistPurchase.
     * @param {PlaylistPurchaseUpdateArgs} args - Arguments to update one PlaylistPurchase.
     * @example
     * // Update one PlaylistPurchase
     * const playlistPurchase = await prisma.playlistPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistPurchaseUpdateArgs>(args: SelectSubset<T, PlaylistPurchaseUpdateArgs<ExtArgs>>): Prisma__PlaylistPurchaseClient<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistPurchases.
     * @param {PlaylistPurchaseDeleteManyArgs} args - Arguments to filter PlaylistPurchases to delete.
     * @example
     * // Delete a few PlaylistPurchases
     * const { count } = await prisma.playlistPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistPurchaseDeleteManyArgs>(args?: SelectSubset<T, PlaylistPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistPurchases
     * const playlistPurchase = await prisma.playlistPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistPurchaseUpdateManyArgs>(args: SelectSubset<T, PlaylistPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistPurchases and returns the data updated in the database.
     * @param {PlaylistPurchaseUpdateManyAndReturnArgs} args - Arguments to update many PlaylistPurchases.
     * @example
     * // Update many PlaylistPurchases
     * const playlistPurchase = await prisma.playlistPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaylistPurchases and only return the `id`
     * const playlistPurchaseWithIdOnly = await prisma.playlistPurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaylistPurchase.
     * @param {PlaylistPurchaseUpsertArgs} args - Arguments to update or create a PlaylistPurchase.
     * @example
     * // Update or create a PlaylistPurchase
     * const playlistPurchase = await prisma.playlistPurchase.upsert({
     *   create: {
     *     // ... data to create a PlaylistPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistPurchase we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistPurchaseUpsertArgs>(args: SelectSubset<T, PlaylistPurchaseUpsertArgs<ExtArgs>>): Prisma__PlaylistPurchaseClient<$Result.GetResult<Prisma.$PlaylistPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistPurchaseCountArgs} args - Arguments to filter PlaylistPurchases to count.
     * @example
     * // Count the number of PlaylistPurchases
     * const count = await prisma.playlistPurchase.count({
     *   where: {
     *     // ... the filter for the PlaylistPurchases we want to count
     *   }
     * })
    **/
    count<T extends PlaylistPurchaseCountArgs>(
      args?: Subset<T, PlaylistPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistPurchaseAggregateArgs>(args: Subset<T, PlaylistPurchaseAggregateArgs>): Prisma.PrismaPromise<GetPlaylistPurchaseAggregateType<T>>

    /**
     * Group by PlaylistPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistPurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistPurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistPurchase model
   */
  readonly fields: PlaylistPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playlist<T extends playlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, playlistDefaultArgs<ExtArgs>>): Prisma__playlistClient<$Result.GetResult<Prisma.$playlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaylistPurchase model
   */
  interface PlaylistPurchaseFieldRefs {
    readonly id: FieldRef<"PlaylistPurchase", 'String'>
    readonly userId: FieldRef<"PlaylistPurchase", 'String'>
    readonly playlistId: FieldRef<"PlaylistPurchase", 'String'>
    readonly playlistName: FieldRef<"PlaylistPurchase", 'String'>
    readonly razorpayPaymentLinkId: FieldRef<"PlaylistPurchase", 'String'>
    readonly razorpayPaymentLinkStatus: FieldRef<"PlaylistPurchase", 'String'>
    readonly razorpayPaymentLinkRefereceId: FieldRef<"PlaylistPurchase", 'String'>
    readonly razorpayPaymentId: FieldRef<"PlaylistPurchase", 'String'>
    readonly razorpaySignature: FieldRef<"PlaylistPurchase", 'String'>
    readonly purchasedAt: FieldRef<"PlaylistPurchase", 'DateTime'>
    readonly amount: FieldRef<"PlaylistPurchase", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistPurchase findUnique
   */
  export type PlaylistPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistPurchase to fetch.
     */
    where: PlaylistPurchaseWhereUniqueInput
  }

  /**
   * PlaylistPurchase findUniqueOrThrow
   */
  export type PlaylistPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistPurchase to fetch.
     */
    where: PlaylistPurchaseWhereUniqueInput
  }

  /**
   * PlaylistPurchase findFirst
   */
  export type PlaylistPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistPurchase to fetch.
     */
    where?: PlaylistPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistPurchases to fetch.
     */
    orderBy?: PlaylistPurchaseOrderByWithRelationInput | PlaylistPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistPurchases.
     */
    cursor?: PlaylistPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistPurchases.
     */
    distinct?: PlaylistPurchaseScalarFieldEnum | PlaylistPurchaseScalarFieldEnum[]
  }

  /**
   * PlaylistPurchase findFirstOrThrow
   */
  export type PlaylistPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistPurchase to fetch.
     */
    where?: PlaylistPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistPurchases to fetch.
     */
    orderBy?: PlaylistPurchaseOrderByWithRelationInput | PlaylistPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistPurchases.
     */
    cursor?: PlaylistPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistPurchases.
     */
    distinct?: PlaylistPurchaseScalarFieldEnum | PlaylistPurchaseScalarFieldEnum[]
  }

  /**
   * PlaylistPurchase findMany
   */
  export type PlaylistPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistPurchases to fetch.
     */
    where?: PlaylistPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistPurchases to fetch.
     */
    orderBy?: PlaylistPurchaseOrderByWithRelationInput | PlaylistPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistPurchases.
     */
    cursor?: PlaylistPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistPurchases.
     */
    skip?: number
    distinct?: PlaylistPurchaseScalarFieldEnum | PlaylistPurchaseScalarFieldEnum[]
  }

  /**
   * PlaylistPurchase create
   */
  export type PlaylistPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistPurchase.
     */
    data: XOR<PlaylistPurchaseCreateInput, PlaylistPurchaseUncheckedCreateInput>
  }

  /**
   * PlaylistPurchase createMany
   */
  export type PlaylistPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistPurchases.
     */
    data: PlaylistPurchaseCreateManyInput | PlaylistPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistPurchase createManyAndReturn
   */
  export type PlaylistPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many PlaylistPurchases.
     */
    data: PlaylistPurchaseCreateManyInput | PlaylistPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistPurchase update
   */
  export type PlaylistPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistPurchase.
     */
    data: XOR<PlaylistPurchaseUpdateInput, PlaylistPurchaseUncheckedUpdateInput>
    /**
     * Choose, which PlaylistPurchase to update.
     */
    where: PlaylistPurchaseWhereUniqueInput
  }

  /**
   * PlaylistPurchase updateMany
   */
  export type PlaylistPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistPurchases.
     */
    data: XOR<PlaylistPurchaseUpdateManyMutationInput, PlaylistPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistPurchases to update
     */
    where?: PlaylistPurchaseWhereInput
    /**
     * Limit how many PlaylistPurchases to update.
     */
    limit?: number
  }

  /**
   * PlaylistPurchase updateManyAndReturn
   */
  export type PlaylistPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update PlaylistPurchases.
     */
    data: XOR<PlaylistPurchaseUpdateManyMutationInput, PlaylistPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistPurchases to update
     */
    where?: PlaylistPurchaseWhereInput
    /**
     * Limit how many PlaylistPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistPurchase upsert
   */
  export type PlaylistPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistPurchase to update in case it exists.
     */
    where: PlaylistPurchaseWhereUniqueInput
    /**
     * In case the PlaylistPurchase found by the `where` argument doesn't exist, create a new PlaylistPurchase with this data.
     */
    create: XOR<PlaylistPurchaseCreateInput, PlaylistPurchaseUncheckedCreateInput>
    /**
     * In case the PlaylistPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistPurchaseUpdateInput, PlaylistPurchaseUncheckedUpdateInput>
  }

  /**
   * PlaylistPurchase delete
   */
  export type PlaylistPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
    /**
     * Filter which PlaylistPurchase to delete.
     */
    where: PlaylistPurchaseWhereUniqueInput
  }

  /**
   * PlaylistPurchase deleteMany
   */
  export type PlaylistPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistPurchases to delete
     */
    where?: PlaylistPurchaseWhereInput
    /**
     * Limit how many PlaylistPurchases to delete.
     */
    limit?: number
  }

  /**
   * PlaylistPurchase without action
   */
  export type PlaylistPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistPurchase
     */
    select?: PlaylistPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistPurchase
     */
    omit?: PlaylistPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    userId: string | null
    deadline: Date | null
    status: $Enums.taskStatus | null
    task: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    deadline: Date | null
    status: $Enums.taskStatus | null
    task: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    userId: number
    deadline: number
    status: number
    task: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    userId?: true
    deadline?: true
    status?: true
    task?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    userId?: true
    deadline?: true
    status?: true
    task?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    userId?: true
    deadline?: true
    status?: true
    task?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    userId: string
    deadline: Date
    status: $Enums.taskStatus
    task: string
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deadline?: boolean
    status?: boolean
    task?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    notifications?: boolean | Task$notificationsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deadline?: boolean
    status?: boolean
    task?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deadline?: boolean
    status?: boolean
    task?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    userId?: boolean
    deadline?: boolean
    status?: boolean
    task?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deadline" | "status" | "task" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    notifications?: boolean | Task$notificationsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deadline: Date
      status: $Enums.taskStatus
      task: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Task$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Task$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly deadline: FieldRef<"Task", 'DateTime'>
    readonly status: FieldRef<"Task", 'taskStatus'>
    readonly task: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.notifications
   */
  export type Task$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    sent: boolean | null
    notifyAt: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    userId: string | null
    sent: boolean | null
    notifyAt: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    taskId: number
    userId: number
    sent: number
    notifyAt: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    sent?: true
    notifyAt?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    sent?: true
    notifyAt?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    taskId?: true
    userId?: true
    sent?: true
    notifyAt?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    taskId: string
    userId: string
    sent: boolean
    notifyAt: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    sent?: boolean
    notifyAt?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    sent?: boolean
    notifyAt?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    userId?: boolean
    sent?: boolean
    notifyAt?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    taskId?: boolean
    userId?: boolean
    sent?: boolean
    notifyAt?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "userId" | "sent" | "notifyAt" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      userId: string
      sent: boolean
      notifyAt: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly taskId: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly sent: FieldRef<"Notification", 'Boolean'>
    readonly notifyAt: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    avatar: 'avatar',
    role: 'role',
    password: 'password',
    isVerified: 'isVerified',
    authProvider: 'authProvider',
    refreshToken: 'refreshToken',
    verificationCode: 'verificationCode',
    purchasedPlaylist: 'purchasedPlaylist',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    testCases: 'testCases',
    codesnippets: 'codesnippets',
    referenceSolution: 'referenceSolution',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    problemId: 'problemId',
    userId: 'userId',
    sourceCode: 'sourceCode',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TestcaseScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    testCase: 'testCase',
    passed: 'passed',
    stdout: 'stdout',
    expected: 'expected',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestcaseScalarFieldEnum = (typeof TestcaseScalarFieldEnum)[keyof typeof TestcaseScalarFieldEnum]


  export const ProblemSolvedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemSolvedScalarFieldEnum = (typeof ProblemSolvedScalarFieldEnum)[keyof typeof ProblemSolvedScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    coverImage: 'coverImage',
    isPaid: 'isPaid',
    basePrice: 'basePrice',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const ProblemInPlaylistScalarFieldEnum: {
    id: 'id',
    playListId: 'playListId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemInPlaylistScalarFieldEnum = (typeof ProblemInPlaylistScalarFieldEnum)[keyof typeof ProblemInPlaylistScalarFieldEnum]


  export const PlaylistPurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    playlistId: 'playlistId',
    playlistName: 'playlistName',
    razorpayPaymentLinkId: 'razorpayPaymentLinkId',
    razorpayPaymentLinkStatus: 'razorpayPaymentLinkStatus',
    razorpayPaymentLinkRefereceId: 'razorpayPaymentLinkRefereceId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    purchasedAt: 'purchasedAt',
    amount: 'amount'
  };

  export type PlaylistPurchaseScalarFieldEnum = (typeof PlaylistPurchaseScalarFieldEnum)[keyof typeof PlaylistPurchaseScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deadline: 'deadline',
    status: 'status',
    task: 'task',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    userId: 'userId',
    sent: 'sent',
    notifyAt: 'notifyAt',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'userRole'
   */
  export type EnumuserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRole'>
    


  /**
   * Reference to a field of type 'userRole[]'
   */
  export type ListEnumuserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'authSource'
   */
  export type EnumauthSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'authSource'>
    


  /**
   * Reference to a field of type 'authSource[]'
   */
  export type ListEnumauthSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'authSource[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'submissionStatus'
   */
  export type EnumsubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'submissionStatus'>
    


  /**
   * Reference to a field of type 'submissionStatus[]'
   */
  export type ListEnumsubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'submissionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'taskStatus'
   */
  export type EnumtaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'taskStatus'>
    


  /**
   * Reference to a field of type 'taskStatus[]'
   */
  export type ListEnumtaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'taskStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    avatar?: StringNullableFilter<"user"> | string | null
    role?: EnumuserRoleFilter<"user"> | $Enums.userRole
    password?: StringNullableFilter<"user"> | string | null
    isVerified?: BoolFilter<"user"> | boolean
    authProvider?: EnumauthSourceFilter<"user"> | $Enums.authSource
    refreshToken?: StringNullableFilter<"user"> | string | null
    verificationCode?: StringNullableFilter<"user"> | string | null
    purchasedPlaylist?: StringNullableListFilter<"user">
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    problems?: ProblemListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    playlist?: PlaylistListRelationFilter
    purchases?: PlaylistPurchaseListRelationFilter
    tasks?: TaskListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    authProvider?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    purchasedPlaylist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: problemOrderByRelationAggregateInput
    problemSolved?: problemSolvedOrderByRelationAggregateInput
    playlist?: playlistOrderByRelationAggregateInput
    purchases?: PlaylistPurchaseOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    avatar?: StringNullableFilter<"user"> | string | null
    role?: EnumuserRoleFilter<"user"> | $Enums.userRole
    password?: StringNullableFilter<"user"> | string | null
    isVerified?: BoolFilter<"user"> | boolean
    authProvider?: EnumauthSourceFilter<"user"> | $Enums.authSource
    refreshToken?: StringNullableFilter<"user"> | string | null
    verificationCode?: StringNullableFilter<"user"> | string | null
    purchasedPlaylist?: StringNullableListFilter<"user">
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    problems?: ProblemListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
    playlist?: PlaylistListRelationFilter
    purchases?: PlaylistPurchaseListRelationFilter
    tasks?: TaskListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    authProvider?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    purchasedPlaylist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringWithAggregatesFilter<"user"> | string
    avatar?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: EnumuserRoleWithAggregatesFilter<"user"> | $Enums.userRole
    password?: StringNullableWithAggregatesFilter<"user"> | string | null
    isVerified?: BoolWithAggregatesFilter<"user"> | boolean
    authProvider?: EnumauthSourceWithAggregatesFilter<"user"> | $Enums.authSource
    refreshToken?: StringNullableWithAggregatesFilter<"user"> | string | null
    verificationCode?: StringNullableWithAggregatesFilter<"user"> | string | null
    purchasedPlaylist?: StringNullableListFilter<"user">
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type problemWhereInput = {
    AND?: problemWhereInput | problemWhereInput[]
    OR?: problemWhereInput[]
    NOT?: problemWhereInput | problemWhereInput[]
    id?: StringFilter<"problem"> | string
    title?: StringFilter<"problem"> | string
    description?: StringFilter<"problem"> | string
    difficulty?: EnumDifficultyFilter<"problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"problem">
    userId?: StringFilter<"problem"> | string
    examples?: JsonFilter<"problem">
    constraints?: JsonFilter<"problem">
    hints?: JsonNullableFilter<"problem">
    editorial?: StringNullableFilter<"problem"> | string | null
    testCases?: JsonFilter<"problem">
    codesnippets?: JsonFilter<"problem">
    referenceSolution?: JsonNullableFilter<"problem">
    createdAt?: DateTimeFilter<"problem"> | Date | string
    updatedAt?: DateTimeFilter<"problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    submission?: SubmissionListRelationFilter
    solvedBy?: ProblemSolvedListRelationFilter
    problemsPlaylists?: ProblemInPlaylistListRelationFilter
  }

  export type problemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testCases?: SortOrder
    codesnippets?: SortOrder
    referenceSolution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    submission?: submissionOrderByRelationAggregateInput
    solvedBy?: problemSolvedOrderByRelationAggregateInput
    problemsPlaylists?: problemInPlaylistOrderByRelationAggregateInput
  }

  export type problemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: problemWhereInput | problemWhereInput[]
    OR?: problemWhereInput[]
    NOT?: problemWhereInput | problemWhereInput[]
    title?: StringFilter<"problem"> | string
    description?: StringFilter<"problem"> | string
    difficulty?: EnumDifficultyFilter<"problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"problem">
    userId?: StringFilter<"problem"> | string
    examples?: JsonFilter<"problem">
    constraints?: JsonFilter<"problem">
    hints?: JsonNullableFilter<"problem">
    editorial?: StringNullableFilter<"problem"> | string | null
    testCases?: JsonFilter<"problem">
    codesnippets?: JsonFilter<"problem">
    referenceSolution?: JsonNullableFilter<"problem">
    createdAt?: DateTimeFilter<"problem"> | Date | string
    updatedAt?: DateTimeFilter<"problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    submission?: SubmissionListRelationFilter
    solvedBy?: ProblemSolvedListRelationFilter
    problemsPlaylists?: ProblemInPlaylistListRelationFilter
  }, "id">

  export type problemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testCases?: SortOrder
    codesnippets?: SortOrder
    referenceSolution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: problemCountOrderByAggregateInput
    _max?: problemMaxOrderByAggregateInput
    _min?: problemMinOrderByAggregateInput
  }

  export type problemScalarWhereWithAggregatesInput = {
    AND?: problemScalarWhereWithAggregatesInput | problemScalarWhereWithAggregatesInput[]
    OR?: problemScalarWhereWithAggregatesInput[]
    NOT?: problemScalarWhereWithAggregatesInput | problemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"problem"> | string
    title?: StringWithAggregatesFilter<"problem"> | string
    description?: StringWithAggregatesFilter<"problem"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"problem">
    userId?: StringWithAggregatesFilter<"problem"> | string
    examples?: JsonWithAggregatesFilter<"problem">
    constraints?: JsonWithAggregatesFilter<"problem">
    hints?: JsonNullableWithAggregatesFilter<"problem">
    editorial?: StringNullableWithAggregatesFilter<"problem"> | string | null
    testCases?: JsonWithAggregatesFilter<"problem">
    codesnippets?: JsonWithAggregatesFilter<"problem">
    referenceSolution?: JsonNullableWithAggregatesFilter<"problem">
    createdAt?: DateTimeWithAggregatesFilter<"problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"problem"> | Date | string
  }

  export type submissionWhereInput = {
    AND?: submissionWhereInput | submissionWhereInput[]
    OR?: submissionWhereInput[]
    NOT?: submissionWhereInput | submissionWhereInput[]
    id?: StringFilter<"submission"> | string
    problemId?: StringFilter<"submission"> | string
    userId?: StringFilter<"submission"> | string
    sourceCode?: JsonFilter<"submission">
    language?: StringFilter<"submission"> | string
    stdin?: StringNullableFilter<"submission"> | string | null
    stdout?: StringNullableFilter<"submission"> | string | null
    stderr?: StringNullableFilter<"submission"> | string | null
    compileOutput?: StringNullableFilter<"submission"> | string | null
    status?: EnumsubmissionStatusFilter<"submission"> | $Enums.submissionStatus
    memory?: StringNullableFilter<"submission"> | string | null
    time?: StringNullableFilter<"submission"> | string | null
    createdAt?: DateTimeFilter<"submission"> | Date | string
    updatedAt?: DateTimeFilter<"submission"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, problemWhereInput>
    testcase?: TestcaseListRelationFilter
  }

  export type submissionOrderByWithRelationInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problem?: problemOrderByWithRelationInput
    testcase?: testcaseOrderByRelationAggregateInput
  }

  export type submissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: submissionWhereInput | submissionWhereInput[]
    OR?: submissionWhereInput[]
    NOT?: submissionWhereInput | submissionWhereInput[]
    problemId?: StringFilter<"submission"> | string
    userId?: StringFilter<"submission"> | string
    sourceCode?: JsonFilter<"submission">
    language?: StringFilter<"submission"> | string
    stdin?: StringNullableFilter<"submission"> | string | null
    stdout?: StringNullableFilter<"submission"> | string | null
    stderr?: StringNullableFilter<"submission"> | string | null
    compileOutput?: StringNullableFilter<"submission"> | string | null
    status?: EnumsubmissionStatusFilter<"submission"> | $Enums.submissionStatus
    memory?: StringNullableFilter<"submission"> | string | null
    time?: StringNullableFilter<"submission"> | string | null
    createdAt?: DateTimeFilter<"submission"> | Date | string
    updatedAt?: DateTimeFilter<"submission"> | Date | string
    problem?: XOR<ProblemScalarRelationFilter, problemWhereInput>
    testcase?: TestcaseListRelationFilter
  }, "id">

  export type submissionOrderByWithAggregationInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: submissionCountOrderByAggregateInput
    _max?: submissionMaxOrderByAggregateInput
    _min?: submissionMinOrderByAggregateInput
  }

  export type submissionScalarWhereWithAggregatesInput = {
    AND?: submissionScalarWhereWithAggregatesInput | submissionScalarWhereWithAggregatesInput[]
    OR?: submissionScalarWhereWithAggregatesInput[]
    NOT?: submissionScalarWhereWithAggregatesInput | submissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"submission"> | string
    problemId?: StringWithAggregatesFilter<"submission"> | string
    userId?: StringWithAggregatesFilter<"submission"> | string
    sourceCode?: JsonWithAggregatesFilter<"submission">
    language?: StringWithAggregatesFilter<"submission"> | string
    stdin?: StringNullableWithAggregatesFilter<"submission"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"submission"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"submission"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"submission"> | string | null
    status?: EnumsubmissionStatusWithAggregatesFilter<"submission"> | $Enums.submissionStatus
    memory?: StringNullableWithAggregatesFilter<"submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"submission"> | Date | string
  }

  export type testcaseWhereInput = {
    AND?: testcaseWhereInput | testcaseWhereInput[]
    OR?: testcaseWhereInput[]
    NOT?: testcaseWhereInput | testcaseWhereInput[]
    id?: StringFilter<"testcase"> | string
    submissionId?: StringFilter<"testcase"> | string
    testCase?: IntFilter<"testcase"> | number
    passed?: BoolFilter<"testcase"> | boolean
    stdout?: StringNullableFilter<"testcase"> | string | null
    expected?: StringFilter<"testcase"> | string
    stderr?: StringNullableFilter<"testcase"> | string | null
    compileOutput?: StringNullableFilter<"testcase"> | string | null
    status?: EnumsubmissionStatusFilter<"testcase"> | $Enums.submissionStatus
    memory?: StringNullableFilter<"testcase"> | string | null
    time?: StringNullableFilter<"testcase"> | string | null
    createdAt?: DateTimeFilter<"testcase"> | Date | string
    updatedAt?: DateTimeFilter<"testcase"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, submissionWhereInput>
  }

  export type testcaseOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    expected?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: submissionOrderByWithRelationInput
  }

  export type testcaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: testcaseWhereInput | testcaseWhereInput[]
    OR?: testcaseWhereInput[]
    NOT?: testcaseWhereInput | testcaseWhereInput[]
    submissionId?: StringFilter<"testcase"> | string
    testCase?: IntFilter<"testcase"> | number
    passed?: BoolFilter<"testcase"> | boolean
    stdout?: StringNullableFilter<"testcase"> | string | null
    expected?: StringFilter<"testcase"> | string
    stderr?: StringNullableFilter<"testcase"> | string | null
    compileOutput?: StringNullableFilter<"testcase"> | string | null
    status?: EnumsubmissionStatusFilter<"testcase"> | $Enums.submissionStatus
    memory?: StringNullableFilter<"testcase"> | string | null
    time?: StringNullableFilter<"testcase"> | string | null
    createdAt?: DateTimeFilter<"testcase"> | Date | string
    updatedAt?: DateTimeFilter<"testcase"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, submissionWhereInput>
  }, "id">

  export type testcaseOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrderInput | SortOrder
    expected?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: testcaseCountOrderByAggregateInput
    _avg?: testcaseAvgOrderByAggregateInput
    _max?: testcaseMaxOrderByAggregateInput
    _min?: testcaseMinOrderByAggregateInput
    _sum?: testcaseSumOrderByAggregateInput
  }

  export type testcaseScalarWhereWithAggregatesInput = {
    AND?: testcaseScalarWhereWithAggregatesInput | testcaseScalarWhereWithAggregatesInput[]
    OR?: testcaseScalarWhereWithAggregatesInput[]
    NOT?: testcaseScalarWhereWithAggregatesInput | testcaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"testcase"> | string
    submissionId?: StringWithAggregatesFilter<"testcase"> | string
    testCase?: IntWithAggregatesFilter<"testcase"> | number
    passed?: BoolWithAggregatesFilter<"testcase"> | boolean
    stdout?: StringNullableWithAggregatesFilter<"testcase"> | string | null
    expected?: StringWithAggregatesFilter<"testcase"> | string
    stderr?: StringNullableWithAggregatesFilter<"testcase"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"testcase"> | string | null
    status?: EnumsubmissionStatusWithAggregatesFilter<"testcase"> | $Enums.submissionStatus
    memory?: StringNullableWithAggregatesFilter<"testcase"> | string | null
    time?: StringNullableWithAggregatesFilter<"testcase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"testcase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"testcase"> | Date | string
  }

  export type problemSolvedWhereInput = {
    AND?: problemSolvedWhereInput | problemSolvedWhereInput[]
    OR?: problemSolvedWhereInput[]
    NOT?: problemSolvedWhereInput | problemSolvedWhereInput[]
    id?: StringFilter<"problemSolved"> | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, problemWhereInput>
  }

  export type problemSolvedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    problem?: problemOrderByWithRelationInput
  }

  export type problemSolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: problemSolvedUserIdProblemIdCompoundUniqueInput
    AND?: problemSolvedWhereInput | problemSolvedWhereInput[]
    OR?: problemSolvedWhereInput[]
    NOT?: problemSolvedWhereInput | problemSolvedWhereInput[]
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, problemWhereInput>
  }, "id" | "userId_problemId">

  export type problemSolvedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: problemSolvedCountOrderByAggregateInput
    _max?: problemSolvedMaxOrderByAggregateInput
    _min?: problemSolvedMinOrderByAggregateInput
  }

  export type problemSolvedScalarWhereWithAggregatesInput = {
    AND?: problemSolvedScalarWhereWithAggregatesInput | problemSolvedScalarWhereWithAggregatesInput[]
    OR?: problemSolvedScalarWhereWithAggregatesInput[]
    NOT?: problemSolvedScalarWhereWithAggregatesInput | problemSolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"problemSolved"> | string
    userId?: StringWithAggregatesFilter<"problemSolved"> | string
    problemId?: StringWithAggregatesFilter<"problemSolved"> | string
    createdAt?: DateTimeWithAggregatesFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"problemSolved"> | Date | string
  }

  export type playlistWhereInput = {
    AND?: playlistWhereInput | playlistWhereInput[]
    OR?: playlistWhereInput[]
    NOT?: playlistWhereInput | playlistWhereInput[]
    id?: StringFilter<"playlist"> | string
    name?: StringFilter<"playlist"> | string
    description?: StringNullableFilter<"playlist"> | string | null
    coverImage?: StringNullableFilter<"playlist"> | string | null
    isPaid?: BoolFilter<"playlist"> | boolean
    basePrice?: FloatNullableFilter<"playlist"> | number | null
    userId?: StringFilter<"playlist"> | string
    createdAt?: DateTimeFilter<"playlist"> | Date | string
    updatedAt?: DateTimeFilter<"playlist"> | Date | string
    problems?: ProblemInPlaylistListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    purchases?: PlaylistPurchaseListRelationFilter
  }

  export type playlistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    basePrice?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: problemInPlaylistOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    purchases?: PlaylistPurchaseOrderByRelationAggregateInput
  }

  export type playlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: playlistNameUserIdCompoundUniqueInput
    AND?: playlistWhereInput | playlistWhereInput[]
    OR?: playlistWhereInput[]
    NOT?: playlistWhereInput | playlistWhereInput[]
    name?: StringFilter<"playlist"> | string
    description?: StringNullableFilter<"playlist"> | string | null
    coverImage?: StringNullableFilter<"playlist"> | string | null
    isPaid?: BoolFilter<"playlist"> | boolean
    basePrice?: FloatNullableFilter<"playlist"> | number | null
    userId?: StringFilter<"playlist"> | string
    createdAt?: DateTimeFilter<"playlist"> | Date | string
    updatedAt?: DateTimeFilter<"playlist"> | Date | string
    problems?: ProblemInPlaylistListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    purchases?: PlaylistPurchaseListRelationFilter
  }, "id" | "name_userId">

  export type playlistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    basePrice?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: playlistCountOrderByAggregateInput
    _avg?: playlistAvgOrderByAggregateInput
    _max?: playlistMaxOrderByAggregateInput
    _min?: playlistMinOrderByAggregateInput
    _sum?: playlistSumOrderByAggregateInput
  }

  export type playlistScalarWhereWithAggregatesInput = {
    AND?: playlistScalarWhereWithAggregatesInput | playlistScalarWhereWithAggregatesInput[]
    OR?: playlistScalarWhereWithAggregatesInput[]
    NOT?: playlistScalarWhereWithAggregatesInput | playlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"playlist"> | string
    name?: StringWithAggregatesFilter<"playlist"> | string
    description?: StringNullableWithAggregatesFilter<"playlist"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"playlist"> | string | null
    isPaid?: BoolWithAggregatesFilter<"playlist"> | boolean
    basePrice?: FloatNullableWithAggregatesFilter<"playlist"> | number | null
    userId?: StringWithAggregatesFilter<"playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"playlist"> | Date | string
  }

  export type problemInPlaylistWhereInput = {
    AND?: problemInPlaylistWhereInput | problemInPlaylistWhereInput[]
    OR?: problemInPlaylistWhereInput[]
    NOT?: problemInPlaylistWhereInput | problemInPlaylistWhereInput[]
    id?: StringFilter<"problemInPlaylist"> | string
    playListId?: StringFilter<"problemInPlaylist"> | string
    problemId?: StringFilter<"problemInPlaylist"> | string
    createdAt?: DateTimeFilter<"problemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"problemInPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, playlistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, problemWhereInput>
  }

  export type problemInPlaylistOrderByWithRelationInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: playlistOrderByWithRelationInput
    problem?: problemOrderByWithRelationInput
  }

  export type problemInPlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playListId_problemId?: problemInPlaylistPlayListIdProblemIdCompoundUniqueInput
    AND?: problemInPlaylistWhereInput | problemInPlaylistWhereInput[]
    OR?: problemInPlaylistWhereInput[]
    NOT?: problemInPlaylistWhereInput | problemInPlaylistWhereInput[]
    playListId?: StringFilter<"problemInPlaylist"> | string
    problemId?: StringFilter<"problemInPlaylist"> | string
    createdAt?: DateTimeFilter<"problemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"problemInPlaylist"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, playlistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, problemWhereInput>
  }, "id" | "playListId_problemId">

  export type problemInPlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: problemInPlaylistCountOrderByAggregateInput
    _max?: problemInPlaylistMaxOrderByAggregateInput
    _min?: problemInPlaylistMinOrderByAggregateInput
  }

  export type problemInPlaylistScalarWhereWithAggregatesInput = {
    AND?: problemInPlaylistScalarWhereWithAggregatesInput | problemInPlaylistScalarWhereWithAggregatesInput[]
    OR?: problemInPlaylistScalarWhereWithAggregatesInput[]
    NOT?: problemInPlaylistScalarWhereWithAggregatesInput | problemInPlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"problemInPlaylist"> | string
    playListId?: StringWithAggregatesFilter<"problemInPlaylist"> | string
    problemId?: StringWithAggregatesFilter<"problemInPlaylist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"problemInPlaylist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"problemInPlaylist"> | Date | string
  }

  export type PlaylistPurchaseWhereInput = {
    AND?: PlaylistPurchaseWhereInput | PlaylistPurchaseWhereInput[]
    OR?: PlaylistPurchaseWhereInput[]
    NOT?: PlaylistPurchaseWhereInput | PlaylistPurchaseWhereInput[]
    id?: StringFilter<"PlaylistPurchase"> | string
    userId?: StringFilter<"PlaylistPurchase"> | string
    playlistId?: StringFilter<"PlaylistPurchase"> | string
    playlistName?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkId?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkStatus?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkRefereceId?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentId?: StringNullableFilter<"PlaylistPurchase"> | string | null
    razorpaySignature?: StringNullableFilter<"PlaylistPurchase"> | string | null
    purchasedAt?: DateTimeFilter<"PlaylistPurchase"> | Date | string
    amount?: FloatFilter<"PlaylistPurchase"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    playlist?: XOR<PlaylistScalarRelationFilter, playlistWhereInput>
  }

  export type PlaylistPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    playlistName?: SortOrder
    razorpayPaymentLinkId?: SortOrder
    razorpayPaymentLinkStatus?: SortOrder
    razorpayPaymentLinkRefereceId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    purchasedAt?: SortOrder
    amount?: SortOrder
    user?: userOrderByWithRelationInput
    playlist?: playlistOrderByWithRelationInput
  }

  export type PlaylistPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayPaymentLinkRefereceId?: string
    userId_playlistId?: PlaylistPurchaseUserIdPlaylistIdCompoundUniqueInput
    AND?: PlaylistPurchaseWhereInput | PlaylistPurchaseWhereInput[]
    OR?: PlaylistPurchaseWhereInput[]
    NOT?: PlaylistPurchaseWhereInput | PlaylistPurchaseWhereInput[]
    userId?: StringFilter<"PlaylistPurchase"> | string
    playlistId?: StringFilter<"PlaylistPurchase"> | string
    playlistName?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkId?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkStatus?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentId?: StringNullableFilter<"PlaylistPurchase"> | string | null
    razorpaySignature?: StringNullableFilter<"PlaylistPurchase"> | string | null
    purchasedAt?: DateTimeFilter<"PlaylistPurchase"> | Date | string
    amount?: FloatFilter<"PlaylistPurchase"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    playlist?: XOR<PlaylistScalarRelationFilter, playlistWhereInput>
  }, "id" | "razorpayPaymentLinkRefereceId" | "userId_playlistId">

  export type PlaylistPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    playlistName?: SortOrder
    razorpayPaymentLinkId?: SortOrder
    razorpayPaymentLinkStatus?: SortOrder
    razorpayPaymentLinkRefereceId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    purchasedAt?: SortOrder
    amount?: SortOrder
    _count?: PlaylistPurchaseCountOrderByAggregateInput
    _avg?: PlaylistPurchaseAvgOrderByAggregateInput
    _max?: PlaylistPurchaseMaxOrderByAggregateInput
    _min?: PlaylistPurchaseMinOrderByAggregateInput
    _sum?: PlaylistPurchaseSumOrderByAggregateInput
  }

  export type PlaylistPurchaseScalarWhereWithAggregatesInput = {
    AND?: PlaylistPurchaseScalarWhereWithAggregatesInput | PlaylistPurchaseScalarWhereWithAggregatesInput[]
    OR?: PlaylistPurchaseScalarWhereWithAggregatesInput[]
    NOT?: PlaylistPurchaseScalarWhereWithAggregatesInput | PlaylistPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaylistPurchase"> | string
    userId?: StringWithAggregatesFilter<"PlaylistPurchase"> | string
    playlistId?: StringWithAggregatesFilter<"PlaylistPurchase"> | string
    playlistName?: StringWithAggregatesFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkId?: StringWithAggregatesFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkStatus?: StringWithAggregatesFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkRefereceId?: StringWithAggregatesFilter<"PlaylistPurchase"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"PlaylistPurchase"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"PlaylistPurchase"> | string | null
    purchasedAt?: DateTimeWithAggregatesFilter<"PlaylistPurchase"> | Date | string
    amount?: FloatWithAggregatesFilter<"PlaylistPurchase"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    deadline?: DateTimeFilter<"Task"> | Date | string
    status?: EnumtaskStatusFilter<"Task"> | $Enums.taskStatus
    task?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    notifications?: NotificationListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    task?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    userId?: StringFilter<"Task"> | string
    deadline?: DateTimeFilter<"Task"> | Date | string
    status?: EnumtaskStatusFilter<"Task"> | $Enums.taskStatus
    task?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    notifications?: NotificationListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    task?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    userId?: StringWithAggregatesFilter<"Task"> | string
    deadline?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    status?: EnumtaskStatusWithAggregatesFilter<"Task"> | $Enums.taskStatus
    task?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    taskId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    sent?: BoolFilter<"Notification"> | boolean
    notifyAt?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    sent?: SortOrder
    notifyAt?: SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskId_userId?: NotificationTaskIdUserIdCompoundUniqueInput
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    taskId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    sent?: BoolFilter<"Notification"> | boolean
    notifyAt?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "taskId_userId">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    sent?: SortOrder
    notifyAt?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    taskId?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    sent?: BoolWithAggregatesFilter<"Notification"> | boolean
    notifyAt?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type userCreateInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProblemsInput
    submission?: submissionCreateNestedManyWithoutProblemInput
    solvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: problemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type problemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: submissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: problemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type problemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProblemsNestedInput
    submission?: submissionUpdateManyWithoutProblemNestedInput
    solvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: problemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: problemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type problemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type submissionCreateInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: problemCreateNestedOneWithoutSubmissionInput
    testcase?: testcaseCreateNestedManyWithoutSubmissionInput
  }

  export type submissionUncheckedCreateInput = {
    id?: string
    problemId: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testcase?: testcaseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type submissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: problemUpdateOneRequiredWithoutSubmissionNestedInput
    testcase?: testcaseUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testcase?: testcaseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionCreateManyInput = {
    id?: string
    problemId: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type submissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type submissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testcaseCreateInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: submissionCreateNestedOneWithoutTestcaseInput
  }

  export type testcaseUncheckedCreateInput = {
    id?: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type testcaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUpdateOneRequiredWithoutTestcaseNestedInput
  }

  export type testcaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testcaseCreateManyInput = {
    id?: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type testcaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testcaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProblemSolvedInput
    problem: problemCreateNestedOneWithoutSolvedByInput
  }

  export type problemSolvedUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProblemSolvedNestedInput
    problem?: problemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type problemSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type playlistCreateInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemInPlaylistCreateNestedManyWithoutPlaylistInput
    user: userCreateNestedOneWithoutPlaylistInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutPlaylistInput
  }

  export type playlistUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type playlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemInPlaylistUpdateManyWithoutPlaylistNestedInput
    user?: userUpdateOneRequiredWithoutPlaylistNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type playlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type playlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemInPlaylistCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: playlistCreateNestedOneWithoutProblemsInput
    problem: problemCreateNestedOneWithoutProblemsPlaylistsInput
  }

  export type problemInPlaylistUncheckedCreateInput = {
    id?: string
    playListId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemInPlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: playlistUpdateOneRequiredWithoutProblemsNestedInput
    problem?: problemUpdateOneRequiredWithoutProblemsPlaylistsNestedInput
  }

  export type problemInPlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playListId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemInPlaylistCreateManyInput = {
    id?: string
    playListId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemInPlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemInPlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playListId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistPurchaseCreateInput = {
    id?: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
    user: userCreateNestedOneWithoutPurchasesInput
    playlist: playlistCreateNestedOneWithoutPurchasesInput
  }

  export type PlaylistPurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    playlistId: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
  }

  export type PlaylistPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutPurchasesNestedInput
    playlist?: playlistUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PlaylistPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PlaylistPurchaseCreateManyInput = {
    id?: string
    userId: string
    playlistId: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
  }

  export type PlaylistPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PlaylistPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    id?: string
    deadline: Date | string
    status?: $Enums.taskStatus
    task: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutTasksInput
    notifications?: NotificationCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    userId: string
    deadline: Date | string
    status?: $Enums.taskStatus
    task: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutTasksNestedInput
    notifications?: NotificationUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    userId: string
    deadline: Date | string
    status?: $Enums.taskStatus
    task: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutNotificationsInput
    user: userCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    taskId: string
    userId: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutNotificationsNestedInput
    user?: userUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    taskId: string
    userId: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumuserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleFilter<$PrismaModel> | $Enums.userRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumauthSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.authSource | EnumauthSourceFieldRefInput<$PrismaModel>
    in?: $Enums.authSource[] | ListEnumauthSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.authSource[] | ListEnumauthSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumauthSourceFilter<$PrismaModel> | $Enums.authSource
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProblemListRelationFilter = {
    every?: problemWhereInput
    some?: problemWhereInput
    none?: problemWhereInput
  }

  export type ProblemSolvedListRelationFilter = {
    every?: problemSolvedWhereInput
    some?: problemSolvedWhereInput
    none?: problemSolvedWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: playlistWhereInput
    some?: playlistWhereInput
    none?: playlistWhereInput
  }

  export type PlaylistPurchaseListRelationFilter = {
    every?: PlaylistPurchaseWhereInput
    some?: PlaylistPurchaseWhereInput
    none?: PlaylistPurchaseWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type problemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type problemSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type playlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    authProvider?: SortOrder
    refreshToken?: SortOrder
    verificationCode?: SortOrder
    purchasedPlaylist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    authProvider?: SortOrder
    refreshToken?: SortOrder
    verificationCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    authProvider?: SortOrder
    refreshToken?: SortOrder
    verificationCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumuserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleWithAggregatesFilter<$PrismaModel> | $Enums.userRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleFilter<$PrismaModel>
    _max?: NestedEnumuserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumauthSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.authSource | EnumauthSourceFieldRefInput<$PrismaModel>
    in?: $Enums.authSource[] | ListEnumauthSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.authSource[] | ListEnumauthSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumauthSourceWithAggregatesFilter<$PrismaModel> | $Enums.authSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumauthSourceFilter<$PrismaModel>
    _max?: NestedEnumauthSourceFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: submissionWhereInput
    some?: submissionWhereInput
    none?: submissionWhereInput
  }

  export type ProblemInPlaylistListRelationFilter = {
    every?: problemInPlaylistWhereInput
    some?: problemInPlaylistWhereInput
    none?: problemInPlaylistWhereInput
  }

  export type submissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type problemInPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type problemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    testCases?: SortOrder
    codesnippets?: SortOrder
    referenceSolution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumsubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.submissionStatus | EnumsubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.submissionStatus[] | ListEnumsubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.submissionStatus[] | ListEnumsubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumsubmissionStatusFilter<$PrismaModel> | $Enums.submissionStatus
  }

  export type ProblemScalarRelationFilter = {
    is?: problemWhereInput
    isNot?: problemWhereInput
  }

  export type TestcaseListRelationFilter = {
    every?: testcaseWhereInput
    some?: testcaseWhereInput
    none?: testcaseWhereInput
  }

  export type testcaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type submissionCountOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type submissionMaxOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type submissionMinOrderByAggregateInput = {
    id?: SortOrder
    problemId?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumsubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.submissionStatus | EnumsubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.submissionStatus[] | ListEnumsubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.submissionStatus[] | ListEnumsubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumsubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.submissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumsubmissionStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubmissionScalarRelationFilter = {
    is?: submissionWhereInput
    isNot?: submissionWhereInput
  }

  export type testcaseCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type testcaseAvgOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type testcaseMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type testcaseMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type testcaseSumOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type problemSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type problemSolvedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemSolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemSolvedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type playlistNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type playlistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    isPaid?: SortOrder
    basePrice?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type playlistAvgOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type playlistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    isPaid?: SortOrder
    basePrice?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type playlistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    isPaid?: SortOrder
    basePrice?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type playlistSumOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PlaylistScalarRelationFilter = {
    is?: playlistWhereInput
    isNot?: playlistWhereInput
  }

  export type problemInPlaylistPlayListIdProblemIdCompoundUniqueInput = {
    playListId: string
    problemId: string
  }

  export type problemInPlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemInPlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemInPlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    playListId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PlaylistPurchaseUserIdPlaylistIdCompoundUniqueInput = {
    userId: string
    playlistId: string
  }

  export type PlaylistPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    playlistName?: SortOrder
    razorpayPaymentLinkId?: SortOrder
    razorpayPaymentLinkStatus?: SortOrder
    razorpayPaymentLinkRefereceId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    purchasedAt?: SortOrder
    amount?: SortOrder
  }

  export type PlaylistPurchaseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PlaylistPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    playlistName?: SortOrder
    razorpayPaymentLinkId?: SortOrder
    razorpayPaymentLinkStatus?: SortOrder
    razorpayPaymentLinkRefereceId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    purchasedAt?: SortOrder
    amount?: SortOrder
  }

  export type PlaylistPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    playlistName?: SortOrder
    razorpayPaymentLinkId?: SortOrder
    razorpayPaymentLinkStatus?: SortOrder
    razorpayPaymentLinkRefereceId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    purchasedAt?: SortOrder
    amount?: SortOrder
  }

  export type PlaylistPurchaseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumtaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.taskStatus | EnumtaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.taskStatus[] | ListEnumtaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.taskStatus[] | ListEnumtaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumtaskStatusFilter<$PrismaModel> | $Enums.taskStatus
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    task?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    task?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    task?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumtaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.taskStatus | EnumtaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.taskStatus[] | ListEnumtaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.taskStatus[] | ListEnumtaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumtaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.taskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtaskStatusFilter<$PrismaModel>
    _max?: NestedEnumtaskStatusFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type NotificationTaskIdUserIdCompoundUniqueInput = {
    taskId: string
    userId: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    sent?: SortOrder
    notifyAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    sent?: SortOrder
    notifyAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    sent?: SortOrder
    notifyAt?: SortOrder
    createdAt?: SortOrder
  }

  export type userCreatepurchasedPlaylistInput = {
    set: string[]
  }

  export type problemCreateNestedManyWithoutUserInput = {
    create?: XOR<problemCreateWithoutUserInput, problemUncheckedCreateWithoutUserInput> | problemCreateWithoutUserInput[] | problemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemCreateOrConnectWithoutUserInput | problemCreateOrConnectWithoutUserInput[]
    createMany?: problemCreateManyUserInputEnvelope
    connect?: problemWhereUniqueInput | problemWhereUniqueInput[]
  }

  export type problemSolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type playlistCreateNestedManyWithoutUserInput = {
    create?: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput> | playlistCreateWithoutUserInput[] | playlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUserInput | playlistCreateOrConnectWithoutUserInput[]
    createMany?: playlistCreateManyUserInputEnvelope
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
  }

  export type PlaylistPurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistPurchaseCreateWithoutUserInput, PlaylistPurchaseUncheckedCreateWithoutUserInput> | PlaylistPurchaseCreateWithoutUserInput[] | PlaylistPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistPurchaseCreateOrConnectWithoutUserInput | PlaylistPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistPurchaseCreateManyUserInputEnvelope
    connect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type problemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemCreateWithoutUserInput, problemUncheckedCreateWithoutUserInput> | problemCreateWithoutUserInput[] | problemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemCreateOrConnectWithoutUserInput | problemCreateOrConnectWithoutUserInput[]
    createMany?: problemCreateManyUserInputEnvelope
    connect?: problemWhereUniqueInput | problemWhereUniqueInput[]
  }

  export type problemSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type playlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput> | playlistCreateWithoutUserInput[] | playlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUserInput | playlistCreateOrConnectWithoutUserInput[]
    createMany?: playlistCreateManyUserInputEnvelope
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
  }

  export type PlaylistPurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistPurchaseCreateWithoutUserInput, PlaylistPurchaseUncheckedCreateWithoutUserInput> | PlaylistPurchaseCreateWithoutUserInput[] | PlaylistPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistPurchaseCreateOrConnectWithoutUserInput | PlaylistPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistPurchaseCreateManyUserInputEnvelope
    connect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumuserRoleFieldUpdateOperationsInput = {
    set?: $Enums.userRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumauthSourceFieldUpdateOperationsInput = {
    set?: $Enums.authSource
  }

  export type userUpdatepurchasedPlaylistInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type problemUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemCreateWithoutUserInput, problemUncheckedCreateWithoutUserInput> | problemCreateWithoutUserInput[] | problemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemCreateOrConnectWithoutUserInput | problemCreateOrConnectWithoutUserInput[]
    upsert?: problemUpsertWithWhereUniqueWithoutUserInput | problemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemCreateManyUserInputEnvelope
    set?: problemWhereUniqueInput | problemWhereUniqueInput[]
    disconnect?: problemWhereUniqueInput | problemWhereUniqueInput[]
    delete?: problemWhereUniqueInput | problemWhereUniqueInput[]
    connect?: problemWhereUniqueInput | problemWhereUniqueInput[]
    update?: problemUpdateWithWhereUniqueWithoutUserInput | problemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemUpdateManyWithWhereWithoutUserInput | problemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemScalarWhereInput | problemScalarWhereInput[]
  }

  export type problemSolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutUserInput | problemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutUserInput | problemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutUserInput | problemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type playlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput> | playlistCreateWithoutUserInput[] | playlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUserInput | playlistCreateOrConnectWithoutUserInput[]
    upsert?: playlistUpsertWithWhereUniqueWithoutUserInput | playlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: playlistCreateManyUserInputEnvelope
    set?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    disconnect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    delete?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    update?: playlistUpdateWithWhereUniqueWithoutUserInput | playlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: playlistUpdateManyWithWhereWithoutUserInput | playlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: playlistScalarWhereInput | playlistScalarWhereInput[]
  }

  export type PlaylistPurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistPurchaseCreateWithoutUserInput, PlaylistPurchaseUncheckedCreateWithoutUserInput> | PlaylistPurchaseCreateWithoutUserInput[] | PlaylistPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistPurchaseCreateOrConnectWithoutUserInput | PlaylistPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistPurchaseUpsertWithWhereUniqueWithoutUserInput | PlaylistPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistPurchaseCreateManyUserInputEnvelope
    set?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    disconnect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    delete?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    connect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    update?: PlaylistPurchaseUpdateWithWhereUniqueWithoutUserInput | PlaylistPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistPurchaseUpdateManyWithWhereWithoutUserInput | PlaylistPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistPurchaseScalarWhereInput | PlaylistPurchaseScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type problemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemCreateWithoutUserInput, problemUncheckedCreateWithoutUserInput> | problemCreateWithoutUserInput[] | problemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemCreateOrConnectWithoutUserInput | problemCreateOrConnectWithoutUserInput[]
    upsert?: problemUpsertWithWhereUniqueWithoutUserInput | problemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemCreateManyUserInputEnvelope
    set?: problemWhereUniqueInput | problemWhereUniqueInput[]
    disconnect?: problemWhereUniqueInput | problemWhereUniqueInput[]
    delete?: problemWhereUniqueInput | problemWhereUniqueInput[]
    connect?: problemWhereUniqueInput | problemWhereUniqueInput[]
    update?: problemUpdateWithWhereUniqueWithoutUserInput | problemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemUpdateManyWithWhereWithoutUserInput | problemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemScalarWhereInput | problemScalarWhereInput[]
  }

  export type problemSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutUserInput | problemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutUserInput | problemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutUserInput | problemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type playlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput> | playlistCreateWithoutUserInput[] | playlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: playlistCreateOrConnectWithoutUserInput | playlistCreateOrConnectWithoutUserInput[]
    upsert?: playlistUpsertWithWhereUniqueWithoutUserInput | playlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: playlistCreateManyUserInputEnvelope
    set?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    disconnect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    delete?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    connect?: playlistWhereUniqueInput | playlistWhereUniqueInput[]
    update?: playlistUpdateWithWhereUniqueWithoutUserInput | playlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: playlistUpdateManyWithWhereWithoutUserInput | playlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: playlistScalarWhereInput | playlistScalarWhereInput[]
  }

  export type PlaylistPurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistPurchaseCreateWithoutUserInput, PlaylistPurchaseUncheckedCreateWithoutUserInput> | PlaylistPurchaseCreateWithoutUserInput[] | PlaylistPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistPurchaseCreateOrConnectWithoutUserInput | PlaylistPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistPurchaseUpsertWithWhereUniqueWithoutUserInput | PlaylistPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistPurchaseCreateManyUserInputEnvelope
    set?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    disconnect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    delete?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    connect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    update?: PlaylistPurchaseUpdateWithWhereUniqueWithoutUserInput | PlaylistPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistPurchaseUpdateManyWithWhereWithoutUserInput | PlaylistPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistPurchaseScalarWhereInput | PlaylistPurchaseScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type problemCreatetagsInput = {
    set: string[]
  }

  export type userCreateNestedOneWithoutProblemsInput = {
    create?: XOR<userCreateWithoutProblemsInput, userUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: userCreateOrConnectWithoutProblemsInput
    connect?: userWhereUniqueInput
  }

  export type submissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<submissionCreateWithoutProblemInput, submissionUncheckedCreateWithoutProblemInput> | submissionCreateWithoutProblemInput[] | submissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutProblemInput | submissionCreateOrConnectWithoutProblemInput[]
    createMany?: submissionCreateManyProblemInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type problemSolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type problemInPlaylistCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemInPlaylistCreateWithoutProblemInput, problemInPlaylistUncheckedCreateWithoutProblemInput> | problemInPlaylistCreateWithoutProblemInput[] | problemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemInPlaylistCreateOrConnectWithoutProblemInput | problemInPlaylistCreateOrConnectWithoutProblemInput[]
    createMany?: problemInPlaylistCreateManyProblemInputEnvelope
    connect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
  }

  export type submissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<submissionCreateWithoutProblemInput, submissionUncheckedCreateWithoutProblemInput> | submissionCreateWithoutProblemInput[] | submissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutProblemInput | submissionCreateOrConnectWithoutProblemInput[]
    createMany?: submissionCreateManyProblemInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type problemSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type problemInPlaylistUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemInPlaylistCreateWithoutProblemInput, problemInPlaylistUncheckedCreateWithoutProblemInput> | problemInPlaylistCreateWithoutProblemInput[] | problemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemInPlaylistCreateOrConnectWithoutProblemInput | problemInPlaylistCreateOrConnectWithoutProblemInput[]
    createMany?: problemInPlaylistCreateManyProblemInputEnvelope
    connect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type problemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type userUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<userCreateWithoutProblemsInput, userUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: userCreateOrConnectWithoutProblemsInput
    upsert?: userUpsertWithoutProblemsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProblemsInput, userUpdateWithoutProblemsInput>, userUncheckedUpdateWithoutProblemsInput>
  }

  export type submissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<submissionCreateWithoutProblemInput, submissionUncheckedCreateWithoutProblemInput> | submissionCreateWithoutProblemInput[] | submissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutProblemInput | submissionCreateOrConnectWithoutProblemInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutProblemInput | submissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: submissionCreateManyProblemInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutProblemInput | submissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutProblemInput | submissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type problemSolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutProblemInput | problemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutProblemInput | problemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutProblemInput | problemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type problemInPlaylistUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemInPlaylistCreateWithoutProblemInput, problemInPlaylistUncheckedCreateWithoutProblemInput> | problemInPlaylistCreateWithoutProblemInput[] | problemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemInPlaylistCreateOrConnectWithoutProblemInput | problemInPlaylistCreateOrConnectWithoutProblemInput[]
    upsert?: problemInPlaylistUpsertWithWhereUniqueWithoutProblemInput | problemInPlaylistUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemInPlaylistCreateManyProblemInputEnvelope
    set?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    disconnect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    delete?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    connect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    update?: problemInPlaylistUpdateWithWhereUniqueWithoutProblemInput | problemInPlaylistUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemInPlaylistUpdateManyWithWhereWithoutProblemInput | problemInPlaylistUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemInPlaylistScalarWhereInput | problemInPlaylistScalarWhereInput[]
  }

  export type submissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<submissionCreateWithoutProblemInput, submissionUncheckedCreateWithoutProblemInput> | submissionCreateWithoutProblemInput[] | submissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutProblemInput | submissionCreateOrConnectWithoutProblemInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutProblemInput | submissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: submissionCreateManyProblemInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutProblemInput | submissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutProblemInput | submissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type problemSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutProblemInput | problemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutProblemInput | problemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutProblemInput | problemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type problemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemInPlaylistCreateWithoutProblemInput, problemInPlaylistUncheckedCreateWithoutProblemInput> | problemInPlaylistCreateWithoutProblemInput[] | problemInPlaylistUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemInPlaylistCreateOrConnectWithoutProblemInput | problemInPlaylistCreateOrConnectWithoutProblemInput[]
    upsert?: problemInPlaylistUpsertWithWhereUniqueWithoutProblemInput | problemInPlaylistUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemInPlaylistCreateManyProblemInputEnvelope
    set?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    disconnect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    delete?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    connect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    update?: problemInPlaylistUpdateWithWhereUniqueWithoutProblemInput | problemInPlaylistUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemInPlaylistUpdateManyWithWhereWithoutProblemInput | problemInPlaylistUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemInPlaylistScalarWhereInput | problemInPlaylistScalarWhereInput[]
  }

  export type problemCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<problemCreateWithoutSubmissionInput, problemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: problemCreateOrConnectWithoutSubmissionInput
    connect?: problemWhereUniqueInput
  }

  export type testcaseCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<testcaseCreateWithoutSubmissionInput, testcaseUncheckedCreateWithoutSubmissionInput> | testcaseCreateWithoutSubmissionInput[] | testcaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: testcaseCreateOrConnectWithoutSubmissionInput | testcaseCreateOrConnectWithoutSubmissionInput[]
    createMany?: testcaseCreateManySubmissionInputEnvelope
    connect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
  }

  export type testcaseUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<testcaseCreateWithoutSubmissionInput, testcaseUncheckedCreateWithoutSubmissionInput> | testcaseCreateWithoutSubmissionInput[] | testcaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: testcaseCreateOrConnectWithoutSubmissionInput | testcaseCreateOrConnectWithoutSubmissionInput[]
    createMany?: testcaseCreateManySubmissionInputEnvelope
    connect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
  }

  export type EnumsubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.submissionStatus
  }

  export type problemUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<problemCreateWithoutSubmissionInput, problemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: problemCreateOrConnectWithoutSubmissionInput
    upsert?: problemUpsertWithoutSubmissionInput
    connect?: problemWhereUniqueInput
    update?: XOR<XOR<problemUpdateToOneWithWhereWithoutSubmissionInput, problemUpdateWithoutSubmissionInput>, problemUncheckedUpdateWithoutSubmissionInput>
  }

  export type testcaseUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<testcaseCreateWithoutSubmissionInput, testcaseUncheckedCreateWithoutSubmissionInput> | testcaseCreateWithoutSubmissionInput[] | testcaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: testcaseCreateOrConnectWithoutSubmissionInput | testcaseCreateOrConnectWithoutSubmissionInput[]
    upsert?: testcaseUpsertWithWhereUniqueWithoutSubmissionInput | testcaseUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: testcaseCreateManySubmissionInputEnvelope
    set?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    disconnect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    delete?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    connect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    update?: testcaseUpdateWithWhereUniqueWithoutSubmissionInput | testcaseUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: testcaseUpdateManyWithWhereWithoutSubmissionInput | testcaseUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: testcaseScalarWhereInput | testcaseScalarWhereInput[]
  }

  export type testcaseUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<testcaseCreateWithoutSubmissionInput, testcaseUncheckedCreateWithoutSubmissionInput> | testcaseCreateWithoutSubmissionInput[] | testcaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: testcaseCreateOrConnectWithoutSubmissionInput | testcaseCreateOrConnectWithoutSubmissionInput[]
    upsert?: testcaseUpsertWithWhereUniqueWithoutSubmissionInput | testcaseUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: testcaseCreateManySubmissionInputEnvelope
    set?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    disconnect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    delete?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    connect?: testcaseWhereUniqueInput | testcaseWhereUniqueInput[]
    update?: testcaseUpdateWithWhereUniqueWithoutSubmissionInput | testcaseUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: testcaseUpdateManyWithWhereWithoutSubmissionInput | testcaseUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: testcaseScalarWhereInput | testcaseScalarWhereInput[]
  }

  export type submissionCreateNestedOneWithoutTestcaseInput = {
    create?: XOR<submissionCreateWithoutTestcaseInput, submissionUncheckedCreateWithoutTestcaseInput>
    connectOrCreate?: submissionCreateOrConnectWithoutTestcaseInput
    connect?: submissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type submissionUpdateOneRequiredWithoutTestcaseNestedInput = {
    create?: XOR<submissionCreateWithoutTestcaseInput, submissionUncheckedCreateWithoutTestcaseInput>
    connectOrCreate?: submissionCreateOrConnectWithoutTestcaseInput
    upsert?: submissionUpsertWithoutTestcaseInput
    connect?: submissionWhereUniqueInput
    update?: XOR<XOR<submissionUpdateToOneWithWhereWithoutTestcaseInput, submissionUpdateWithoutTestcaseInput>, submissionUncheckedUpdateWithoutTestcaseInput>
  }

  export type userCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<userCreateWithoutProblemSolvedInput, userUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: userCreateOrConnectWithoutProblemSolvedInput
    connect?: userWhereUniqueInput
  }

  export type problemCreateNestedOneWithoutSolvedByInput = {
    create?: XOR<problemCreateWithoutSolvedByInput, problemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: problemCreateOrConnectWithoutSolvedByInput
    connect?: problemWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<userCreateWithoutProblemSolvedInput, userUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: userCreateOrConnectWithoutProblemSolvedInput
    upsert?: userUpsertWithoutProblemSolvedInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProblemSolvedInput, userUpdateWithoutProblemSolvedInput>, userUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type problemUpdateOneRequiredWithoutSolvedByNestedInput = {
    create?: XOR<problemCreateWithoutSolvedByInput, problemUncheckedCreateWithoutSolvedByInput>
    connectOrCreate?: problemCreateOrConnectWithoutSolvedByInput
    upsert?: problemUpsertWithoutSolvedByInput
    connect?: problemWhereUniqueInput
    update?: XOR<XOR<problemUpdateToOneWithWhereWithoutSolvedByInput, problemUpdateWithoutSolvedByInput>, problemUncheckedUpdateWithoutSolvedByInput>
  }

  export type problemInPlaylistCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<problemInPlaylistCreateWithoutPlaylistInput, problemInPlaylistUncheckedCreateWithoutPlaylistInput> | problemInPlaylistCreateWithoutPlaylistInput[] | problemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: problemInPlaylistCreateOrConnectWithoutPlaylistInput | problemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: problemInPlaylistCreateManyPlaylistInputEnvelope
    connect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<userCreateWithoutPlaylistInput, userUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: userCreateOrConnectWithoutPlaylistInput
    connect?: userWhereUniqueInput
  }

  export type PlaylistPurchaseCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistPurchaseCreateWithoutPlaylistInput, PlaylistPurchaseUncheckedCreateWithoutPlaylistInput> | PlaylistPurchaseCreateWithoutPlaylistInput[] | PlaylistPurchaseUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistPurchaseCreateOrConnectWithoutPlaylistInput | PlaylistPurchaseCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistPurchaseCreateManyPlaylistInputEnvelope
    connect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
  }

  export type problemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<problemInPlaylistCreateWithoutPlaylistInput, problemInPlaylistUncheckedCreateWithoutPlaylistInput> | problemInPlaylistCreateWithoutPlaylistInput[] | problemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: problemInPlaylistCreateOrConnectWithoutPlaylistInput | problemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    createMany?: problemInPlaylistCreateManyPlaylistInputEnvelope
    connect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
  }

  export type PlaylistPurchaseUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistPurchaseCreateWithoutPlaylistInput, PlaylistPurchaseUncheckedCreateWithoutPlaylistInput> | PlaylistPurchaseCreateWithoutPlaylistInput[] | PlaylistPurchaseUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistPurchaseCreateOrConnectWithoutPlaylistInput | PlaylistPurchaseCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistPurchaseCreateManyPlaylistInputEnvelope
    connect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type problemInPlaylistUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<problemInPlaylistCreateWithoutPlaylistInput, problemInPlaylistUncheckedCreateWithoutPlaylistInput> | problemInPlaylistCreateWithoutPlaylistInput[] | problemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: problemInPlaylistCreateOrConnectWithoutPlaylistInput | problemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: problemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | problemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: problemInPlaylistCreateManyPlaylistInputEnvelope
    set?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    disconnect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    delete?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    connect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    update?: problemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | problemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: problemInPlaylistUpdateManyWithWhereWithoutPlaylistInput | problemInPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: problemInPlaylistScalarWhereInput | problemInPlaylistScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutPlaylistNestedInput = {
    create?: XOR<userCreateWithoutPlaylistInput, userUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: userCreateOrConnectWithoutPlaylistInput
    upsert?: userUpsertWithoutPlaylistInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPlaylistInput, userUpdateWithoutPlaylistInput>, userUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistPurchaseUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistPurchaseCreateWithoutPlaylistInput, PlaylistPurchaseUncheckedCreateWithoutPlaylistInput> | PlaylistPurchaseCreateWithoutPlaylistInput[] | PlaylistPurchaseUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistPurchaseCreateOrConnectWithoutPlaylistInput | PlaylistPurchaseCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistPurchaseUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistPurchaseUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistPurchaseCreateManyPlaylistInputEnvelope
    set?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    disconnect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    delete?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    connect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    update?: PlaylistPurchaseUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistPurchaseUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistPurchaseUpdateManyWithWhereWithoutPlaylistInput | PlaylistPurchaseUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistPurchaseScalarWhereInput | PlaylistPurchaseScalarWhereInput[]
  }

  export type problemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<problemInPlaylistCreateWithoutPlaylistInput, problemInPlaylistUncheckedCreateWithoutPlaylistInput> | problemInPlaylistCreateWithoutPlaylistInput[] | problemInPlaylistUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: problemInPlaylistCreateOrConnectWithoutPlaylistInput | problemInPlaylistCreateOrConnectWithoutPlaylistInput[]
    upsert?: problemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput | problemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: problemInPlaylistCreateManyPlaylistInputEnvelope
    set?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    disconnect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    delete?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    connect?: problemInPlaylistWhereUniqueInput | problemInPlaylistWhereUniqueInput[]
    update?: problemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput | problemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: problemInPlaylistUpdateManyWithWhereWithoutPlaylistInput | problemInPlaylistUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: problemInPlaylistScalarWhereInput | problemInPlaylistScalarWhereInput[]
  }

  export type PlaylistPurchaseUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistPurchaseCreateWithoutPlaylistInput, PlaylistPurchaseUncheckedCreateWithoutPlaylistInput> | PlaylistPurchaseCreateWithoutPlaylistInput[] | PlaylistPurchaseUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistPurchaseCreateOrConnectWithoutPlaylistInput | PlaylistPurchaseCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistPurchaseUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistPurchaseUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistPurchaseCreateManyPlaylistInputEnvelope
    set?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    disconnect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    delete?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    connect?: PlaylistPurchaseWhereUniqueInput | PlaylistPurchaseWhereUniqueInput[]
    update?: PlaylistPurchaseUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistPurchaseUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistPurchaseUpdateManyWithWhereWithoutPlaylistInput | PlaylistPurchaseUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistPurchaseScalarWhereInput | PlaylistPurchaseScalarWhereInput[]
  }

  export type playlistCreateNestedOneWithoutProblemsInput = {
    create?: XOR<playlistCreateWithoutProblemsInput, playlistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: playlistCreateOrConnectWithoutProblemsInput
    connect?: playlistWhereUniqueInput
  }

  export type problemCreateNestedOneWithoutProblemsPlaylistsInput = {
    create?: XOR<problemCreateWithoutProblemsPlaylistsInput, problemUncheckedCreateWithoutProblemsPlaylistsInput>
    connectOrCreate?: problemCreateOrConnectWithoutProblemsPlaylistsInput
    connect?: problemWhereUniqueInput
  }

  export type playlistUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<playlistCreateWithoutProblemsInput, playlistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: playlistCreateOrConnectWithoutProblemsInput
    upsert?: playlistUpsertWithoutProblemsInput
    connect?: playlistWhereUniqueInput
    update?: XOR<XOR<playlistUpdateToOneWithWhereWithoutProblemsInput, playlistUpdateWithoutProblemsInput>, playlistUncheckedUpdateWithoutProblemsInput>
  }

  export type problemUpdateOneRequiredWithoutProblemsPlaylistsNestedInput = {
    create?: XOR<problemCreateWithoutProblemsPlaylistsInput, problemUncheckedCreateWithoutProblemsPlaylistsInput>
    connectOrCreate?: problemCreateOrConnectWithoutProblemsPlaylistsInput
    upsert?: problemUpsertWithoutProblemsPlaylistsInput
    connect?: problemWhereUniqueInput
    update?: XOR<XOR<problemUpdateToOneWithWhereWithoutProblemsPlaylistsInput, problemUpdateWithoutProblemsPlaylistsInput>, problemUncheckedUpdateWithoutProblemsPlaylistsInput>
  }

  export type userCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<userCreateWithoutPurchasesInput, userUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: userCreateOrConnectWithoutPurchasesInput
    connect?: userWhereUniqueInput
  }

  export type playlistCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<playlistCreateWithoutPurchasesInput, playlistUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: playlistCreateOrConnectWithoutPurchasesInput
    connect?: playlistWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<userCreateWithoutPurchasesInput, userUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: userCreateOrConnectWithoutPurchasesInput
    upsert?: userUpsertWithoutPurchasesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPurchasesInput, userUpdateWithoutPurchasesInput>, userUncheckedUpdateWithoutPurchasesInput>
  }

  export type playlistUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<playlistCreateWithoutPurchasesInput, playlistUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: playlistCreateOrConnectWithoutPurchasesInput
    upsert?: playlistUpsertWithoutPurchasesInput
    connect?: playlistWhereUniqueInput
    update?: XOR<XOR<playlistUpdateToOneWithWhereWithoutPurchasesInput, playlistUpdateWithoutPurchasesInput>, playlistUncheckedUpdateWithoutPurchasesInput>
  }

  export type userCreateNestedOneWithoutTasksInput = {
    create?: XOR<userCreateWithoutTasksInput, userUncheckedCreateWithoutTasksInput>
    connectOrCreate?: userCreateOrConnectWithoutTasksInput
    connect?: userWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutTaskInput = {
    create?: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput> | NotificationCreateWithoutTaskInput[] | NotificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTaskInput | NotificationCreateOrConnectWithoutTaskInput[]
    createMany?: NotificationCreateManyTaskInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput> | NotificationCreateWithoutTaskInput[] | NotificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTaskInput | NotificationCreateOrConnectWithoutTaskInput[]
    createMany?: NotificationCreateManyTaskInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumtaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.taskStatus
  }

  export type userUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<userCreateWithoutTasksInput, userUncheckedCreateWithoutTasksInput>
    connectOrCreate?: userCreateOrConnectWithoutTasksInput
    upsert?: userUpsertWithoutTasksInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTasksInput, userUpdateWithoutTasksInput>, userUncheckedUpdateWithoutTasksInput>
  }

  export type NotificationUpdateManyWithoutTaskNestedInput = {
    create?: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput> | NotificationCreateWithoutTaskInput[] | NotificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTaskInput | NotificationCreateOrConnectWithoutTaskInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTaskInput | NotificationUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: NotificationCreateManyTaskInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTaskInput | NotificationUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTaskInput | NotificationUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput> | NotificationCreateWithoutTaskInput[] | NotificationUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTaskInput | NotificationCreateOrConnectWithoutTaskInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTaskInput | NotificationUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: NotificationCreateManyTaskInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTaskInput | NotificationUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTaskInput | NotificationUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<TaskCreateWithoutNotificationsInput, TaskUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutNotificationsInput
    connect?: TaskWhereUniqueInput
  }

  export type userCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationsInput
    connect?: userWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<TaskCreateWithoutNotificationsInput, TaskUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutNotificationsInput
    upsert?: TaskUpsertWithoutNotificationsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutNotificationsInput, TaskUpdateWithoutNotificationsInput>, TaskUncheckedUpdateWithoutNotificationsInput>
  }

  export type userUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: userCreateOrConnectWithoutNotificationsInput
    upsert?: userUpsertWithoutNotificationsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotificationsInput, userUpdateWithoutNotificationsInput>, userUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumuserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleFilter<$PrismaModel> | $Enums.userRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumauthSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.authSource | EnumauthSourceFieldRefInput<$PrismaModel>
    in?: $Enums.authSource[] | ListEnumauthSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.authSource[] | ListEnumauthSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumauthSourceFilter<$PrismaModel> | $Enums.authSource
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumuserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRole | EnumuserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRole[] | ListEnumuserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleWithAggregatesFilter<$PrismaModel> | $Enums.userRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleFilter<$PrismaModel>
    _max?: NestedEnumuserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumauthSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.authSource | EnumauthSourceFieldRefInput<$PrismaModel>
    in?: $Enums.authSource[] | ListEnumauthSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.authSource[] | ListEnumauthSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumauthSourceWithAggregatesFilter<$PrismaModel> | $Enums.authSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumauthSourceFilter<$PrismaModel>
    _max?: NestedEnumauthSourceFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumsubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.submissionStatus | EnumsubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.submissionStatus[] | ListEnumsubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.submissionStatus[] | ListEnumsubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumsubmissionStatusFilter<$PrismaModel> | $Enums.submissionStatus
  }

  export type NestedEnumsubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.submissionStatus | EnumsubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.submissionStatus[] | ListEnumsubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.submissionStatus[] | ListEnumsubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumsubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.submissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumsubmissionStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumtaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.taskStatus | EnumtaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.taskStatus[] | ListEnumtaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.taskStatus[] | ListEnumtaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumtaskStatusFilter<$PrismaModel> | $Enums.taskStatus
  }

  export type NestedEnumtaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.taskStatus | EnumtaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.taskStatus[] | ListEnumtaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.taskStatus[] | ListEnumtaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumtaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.taskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtaskStatusFilter<$PrismaModel>
    _max?: NestedEnumtaskStatusFilter<$PrismaModel>
  }

  export type problemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: submissionCreateNestedManyWithoutProblemInput
    solvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: problemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type problemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: submissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: problemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type problemCreateOrConnectWithoutUserInput = {
    where: problemWhereUniqueInput
    create: XOR<problemCreateWithoutUserInput, problemUncheckedCreateWithoutUserInput>
  }

  export type problemCreateManyUserInputEnvelope = {
    data: problemCreateManyUserInput | problemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type problemSolvedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: problemCreateNestedOneWithoutSolvedByInput
  }

  export type problemSolvedUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateOrConnectWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    create: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput>
  }

  export type problemSolvedCreateManyUserInputEnvelope = {
    data: problemSolvedCreateManyUserInput | problemSolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type playlistCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemInPlaylistCreateNestedManyWithoutPlaylistInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutPlaylistInput
  }

  export type playlistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type playlistCreateOrConnectWithoutUserInput = {
    where: playlistWhereUniqueInput
    create: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput>
  }

  export type playlistCreateManyUserInputEnvelope = {
    data: playlistCreateManyUserInput | playlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistPurchaseCreateWithoutUserInput = {
    id?: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
    playlist: playlistCreateNestedOneWithoutPurchasesInput
  }

  export type PlaylistPurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    playlistId: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
  }

  export type PlaylistPurchaseCreateOrConnectWithoutUserInput = {
    where: PlaylistPurchaseWhereUniqueInput
    create: XOR<PlaylistPurchaseCreateWithoutUserInput, PlaylistPurchaseUncheckedCreateWithoutUserInput>
  }

  export type PlaylistPurchaseCreateManyUserInputEnvelope = {
    data: PlaylistPurchaseCreateManyUserInput | PlaylistPurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    deadline: Date | string
    status?: $Enums.taskStatus
    task: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    deadline: Date | string
    status?: $Enums.taskStatus
    task: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    taskId: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type problemUpsertWithWhereUniqueWithoutUserInput = {
    where: problemWhereUniqueInput
    update: XOR<problemUpdateWithoutUserInput, problemUncheckedUpdateWithoutUserInput>
    create: XOR<problemCreateWithoutUserInput, problemUncheckedCreateWithoutUserInput>
  }

  export type problemUpdateWithWhereUniqueWithoutUserInput = {
    where: problemWhereUniqueInput
    data: XOR<problemUpdateWithoutUserInput, problemUncheckedUpdateWithoutUserInput>
  }

  export type problemUpdateManyWithWhereWithoutUserInput = {
    where: problemScalarWhereInput
    data: XOR<problemUpdateManyMutationInput, problemUncheckedUpdateManyWithoutUserInput>
  }

  export type problemScalarWhereInput = {
    AND?: problemScalarWhereInput | problemScalarWhereInput[]
    OR?: problemScalarWhereInput[]
    NOT?: problemScalarWhereInput | problemScalarWhereInput[]
    id?: StringFilter<"problem"> | string
    title?: StringFilter<"problem"> | string
    description?: StringFilter<"problem"> | string
    difficulty?: EnumDifficultyFilter<"problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"problem">
    userId?: StringFilter<"problem"> | string
    examples?: JsonFilter<"problem">
    constraints?: JsonFilter<"problem">
    hints?: JsonNullableFilter<"problem">
    editorial?: StringNullableFilter<"problem"> | string | null
    testCases?: JsonFilter<"problem">
    codesnippets?: JsonFilter<"problem">
    referenceSolution?: JsonNullableFilter<"problem">
    createdAt?: DateTimeFilter<"problem"> | Date | string
    updatedAt?: DateTimeFilter<"problem"> | Date | string
  }

  export type problemSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    update: XOR<problemSolvedUpdateWithoutUserInput, problemSolvedUncheckedUpdateWithoutUserInput>
    create: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput>
  }

  export type problemSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    data: XOR<problemSolvedUpdateWithoutUserInput, problemSolvedUncheckedUpdateWithoutUserInput>
  }

  export type problemSolvedUpdateManyWithWhereWithoutUserInput = {
    where: problemSolvedScalarWhereInput
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type problemSolvedScalarWhereInput = {
    AND?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
    OR?: problemSolvedScalarWhereInput[]
    NOT?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
    id?: StringFilter<"problemSolved"> | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
  }

  export type playlistUpsertWithWhereUniqueWithoutUserInput = {
    where: playlistWhereUniqueInput
    update: XOR<playlistUpdateWithoutUserInput, playlistUncheckedUpdateWithoutUserInput>
    create: XOR<playlistCreateWithoutUserInput, playlistUncheckedCreateWithoutUserInput>
  }

  export type playlistUpdateWithWhereUniqueWithoutUserInput = {
    where: playlistWhereUniqueInput
    data: XOR<playlistUpdateWithoutUserInput, playlistUncheckedUpdateWithoutUserInput>
  }

  export type playlistUpdateManyWithWhereWithoutUserInput = {
    where: playlistScalarWhereInput
    data: XOR<playlistUpdateManyMutationInput, playlistUncheckedUpdateManyWithoutUserInput>
  }

  export type playlistScalarWhereInput = {
    AND?: playlistScalarWhereInput | playlistScalarWhereInput[]
    OR?: playlistScalarWhereInput[]
    NOT?: playlistScalarWhereInput | playlistScalarWhereInput[]
    id?: StringFilter<"playlist"> | string
    name?: StringFilter<"playlist"> | string
    description?: StringNullableFilter<"playlist"> | string | null
    coverImage?: StringNullableFilter<"playlist"> | string | null
    isPaid?: BoolFilter<"playlist"> | boolean
    basePrice?: FloatNullableFilter<"playlist"> | number | null
    userId?: StringFilter<"playlist"> | string
    createdAt?: DateTimeFilter<"playlist"> | Date | string
    updatedAt?: DateTimeFilter<"playlist"> | Date | string
  }

  export type PlaylistPurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistPurchaseWhereUniqueInput
    update: XOR<PlaylistPurchaseUpdateWithoutUserInput, PlaylistPurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistPurchaseCreateWithoutUserInput, PlaylistPurchaseUncheckedCreateWithoutUserInput>
  }

  export type PlaylistPurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistPurchaseWhereUniqueInput
    data: XOR<PlaylistPurchaseUpdateWithoutUserInput, PlaylistPurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistPurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistPurchaseScalarWhereInput
    data: XOR<PlaylistPurchaseUpdateManyMutationInput, PlaylistPurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistPurchaseScalarWhereInput = {
    AND?: PlaylistPurchaseScalarWhereInput | PlaylistPurchaseScalarWhereInput[]
    OR?: PlaylistPurchaseScalarWhereInput[]
    NOT?: PlaylistPurchaseScalarWhereInput | PlaylistPurchaseScalarWhereInput[]
    id?: StringFilter<"PlaylistPurchase"> | string
    userId?: StringFilter<"PlaylistPurchase"> | string
    playlistId?: StringFilter<"PlaylistPurchase"> | string
    playlistName?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkId?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkStatus?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentLinkRefereceId?: StringFilter<"PlaylistPurchase"> | string
    razorpayPaymentId?: StringNullableFilter<"PlaylistPurchase"> | string | null
    razorpaySignature?: StringNullableFilter<"PlaylistPurchase"> | string | null
    purchasedAt?: DateTimeFilter<"PlaylistPurchase"> | Date | string
    amount?: FloatFilter<"PlaylistPurchase"> | number
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    deadline?: DateTimeFilter<"Task"> | Date | string
    status?: EnumtaskStatusFilter<"Task"> | $Enums.taskStatus
    task?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    taskId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    sent?: BoolFilter<"Notification"> | boolean
    notifyAt?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type userCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProblemsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProblemsInput, userUncheckedCreateWithoutProblemsInput>
  }

  export type submissionCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testcase?: testcaseCreateNestedManyWithoutSubmissionInput
  }

  export type submissionUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testcase?: testcaseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type submissionCreateOrConnectWithoutProblemInput = {
    where: submissionWhereUniqueInput
    create: XOR<submissionCreateWithoutProblemInput, submissionUncheckedCreateWithoutProblemInput>
  }

  export type submissionCreateManyProblemInputEnvelope = {
    data: submissionCreateManyProblemInput | submissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type problemSolvedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProblemSolvedInput
  }

  export type problemSolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateOrConnectWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    create: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type problemSolvedCreateManyProblemInputEnvelope = {
    data: problemSolvedCreateManyProblemInput | problemSolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type problemInPlaylistCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: playlistCreateNestedOneWithoutProblemsInput
  }

  export type problemInPlaylistUncheckedCreateWithoutProblemInput = {
    id?: string
    playListId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemInPlaylistCreateOrConnectWithoutProblemInput = {
    where: problemInPlaylistWhereUniqueInput
    create: XOR<problemInPlaylistCreateWithoutProblemInput, problemInPlaylistUncheckedCreateWithoutProblemInput>
  }

  export type problemInPlaylistCreateManyProblemInputEnvelope = {
    data: problemInPlaylistCreateManyProblemInput | problemInPlaylistCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutProblemsInput = {
    update: XOR<userUpdateWithoutProblemsInput, userUncheckedUpdateWithoutProblemsInput>
    create: XOR<userCreateWithoutProblemsInput, userUncheckedCreateWithoutProblemsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProblemsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProblemsInput, userUncheckedUpdateWithoutProblemsInput>
  }

  export type userUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type submissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: submissionWhereUniqueInput
    update: XOR<submissionUpdateWithoutProblemInput, submissionUncheckedUpdateWithoutProblemInput>
    create: XOR<submissionCreateWithoutProblemInput, submissionUncheckedCreateWithoutProblemInput>
  }

  export type submissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: submissionWhereUniqueInput
    data: XOR<submissionUpdateWithoutProblemInput, submissionUncheckedUpdateWithoutProblemInput>
  }

  export type submissionUpdateManyWithWhereWithoutProblemInput = {
    where: submissionScalarWhereInput
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type submissionScalarWhereInput = {
    AND?: submissionScalarWhereInput | submissionScalarWhereInput[]
    OR?: submissionScalarWhereInput[]
    NOT?: submissionScalarWhereInput | submissionScalarWhereInput[]
    id?: StringFilter<"submission"> | string
    problemId?: StringFilter<"submission"> | string
    userId?: StringFilter<"submission"> | string
    sourceCode?: JsonFilter<"submission">
    language?: StringFilter<"submission"> | string
    stdin?: StringNullableFilter<"submission"> | string | null
    stdout?: StringNullableFilter<"submission"> | string | null
    stderr?: StringNullableFilter<"submission"> | string | null
    compileOutput?: StringNullableFilter<"submission"> | string | null
    status?: EnumsubmissionStatusFilter<"submission"> | $Enums.submissionStatus
    memory?: StringNullableFilter<"submission"> | string | null
    time?: StringNullableFilter<"submission"> | string | null
    createdAt?: DateTimeFilter<"submission"> | Date | string
    updatedAt?: DateTimeFilter<"submission"> | Date | string
  }

  export type problemSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    update: XOR<problemSolvedUpdateWithoutProblemInput, problemSolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type problemSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    data: XOR<problemSolvedUpdateWithoutProblemInput, problemSolvedUncheckedUpdateWithoutProblemInput>
  }

  export type problemSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: problemSolvedScalarWhereInput
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type problemInPlaylistUpsertWithWhereUniqueWithoutProblemInput = {
    where: problemInPlaylistWhereUniqueInput
    update: XOR<problemInPlaylistUpdateWithoutProblemInput, problemInPlaylistUncheckedUpdateWithoutProblemInput>
    create: XOR<problemInPlaylistCreateWithoutProblemInput, problemInPlaylistUncheckedCreateWithoutProblemInput>
  }

  export type problemInPlaylistUpdateWithWhereUniqueWithoutProblemInput = {
    where: problemInPlaylistWhereUniqueInput
    data: XOR<problemInPlaylistUpdateWithoutProblemInput, problemInPlaylistUncheckedUpdateWithoutProblemInput>
  }

  export type problemInPlaylistUpdateManyWithWhereWithoutProblemInput = {
    where: problemInPlaylistScalarWhereInput
    data: XOR<problemInPlaylistUpdateManyMutationInput, problemInPlaylistUncheckedUpdateManyWithoutProblemInput>
  }

  export type problemInPlaylistScalarWhereInput = {
    AND?: problemInPlaylistScalarWhereInput | problemInPlaylistScalarWhereInput[]
    OR?: problemInPlaylistScalarWhereInput[]
    NOT?: problemInPlaylistScalarWhereInput | problemInPlaylistScalarWhereInput[]
    id?: StringFilter<"problemInPlaylist"> | string
    playListId?: StringFilter<"problemInPlaylist"> | string
    problemId?: StringFilter<"problemInPlaylist"> | string
    createdAt?: DateTimeFilter<"problemInPlaylist"> | Date | string
    updatedAt?: DateTimeFilter<"problemInPlaylist"> | Date | string
  }

  export type problemCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProblemsInput
    solvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: problemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type problemUncheckedCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    solvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: problemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type problemCreateOrConnectWithoutSubmissionInput = {
    where: problemWhereUniqueInput
    create: XOR<problemCreateWithoutSubmissionInput, problemUncheckedCreateWithoutSubmissionInput>
  }

  export type testcaseCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type testcaseUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type testcaseCreateOrConnectWithoutSubmissionInput = {
    where: testcaseWhereUniqueInput
    create: XOR<testcaseCreateWithoutSubmissionInput, testcaseUncheckedCreateWithoutSubmissionInput>
  }

  export type testcaseCreateManySubmissionInputEnvelope = {
    data: testcaseCreateManySubmissionInput | testcaseCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type problemUpsertWithoutSubmissionInput = {
    update: XOR<problemUpdateWithoutSubmissionInput, problemUncheckedUpdateWithoutSubmissionInput>
    create: XOR<problemCreateWithoutSubmissionInput, problemUncheckedCreateWithoutSubmissionInput>
    where?: problemWhereInput
  }

  export type problemUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: problemWhereInput
    data: XOR<problemUpdateWithoutSubmissionInput, problemUncheckedUpdateWithoutSubmissionInput>
  }

  export type problemUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProblemsNestedInput
    solvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: problemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: problemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type testcaseUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: testcaseWhereUniqueInput
    update: XOR<testcaseUpdateWithoutSubmissionInput, testcaseUncheckedUpdateWithoutSubmissionInput>
    create: XOR<testcaseCreateWithoutSubmissionInput, testcaseUncheckedCreateWithoutSubmissionInput>
  }

  export type testcaseUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: testcaseWhereUniqueInput
    data: XOR<testcaseUpdateWithoutSubmissionInput, testcaseUncheckedUpdateWithoutSubmissionInput>
  }

  export type testcaseUpdateManyWithWhereWithoutSubmissionInput = {
    where: testcaseScalarWhereInput
    data: XOR<testcaseUpdateManyMutationInput, testcaseUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type testcaseScalarWhereInput = {
    AND?: testcaseScalarWhereInput | testcaseScalarWhereInput[]
    OR?: testcaseScalarWhereInput[]
    NOT?: testcaseScalarWhereInput | testcaseScalarWhereInput[]
    id?: StringFilter<"testcase"> | string
    submissionId?: StringFilter<"testcase"> | string
    testCase?: IntFilter<"testcase"> | number
    passed?: BoolFilter<"testcase"> | boolean
    stdout?: StringNullableFilter<"testcase"> | string | null
    expected?: StringFilter<"testcase"> | string
    stderr?: StringNullableFilter<"testcase"> | string | null
    compileOutput?: StringNullableFilter<"testcase"> | string | null
    status?: EnumsubmissionStatusFilter<"testcase"> | $Enums.submissionStatus
    memory?: StringNullableFilter<"testcase"> | string | null
    time?: StringNullableFilter<"testcase"> | string | null
    createdAt?: DateTimeFilter<"testcase"> | Date | string
    updatedAt?: DateTimeFilter<"testcase"> | Date | string
  }

  export type submissionCreateWithoutTestcaseInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: problemCreateNestedOneWithoutSubmissionInput
  }

  export type submissionUncheckedCreateWithoutTestcaseInput = {
    id?: string
    problemId: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type submissionCreateOrConnectWithoutTestcaseInput = {
    where: submissionWhereUniqueInput
    create: XOR<submissionCreateWithoutTestcaseInput, submissionUncheckedCreateWithoutTestcaseInput>
  }

  export type submissionUpsertWithoutTestcaseInput = {
    update: XOR<submissionUpdateWithoutTestcaseInput, submissionUncheckedUpdateWithoutTestcaseInput>
    create: XOR<submissionCreateWithoutTestcaseInput, submissionUncheckedCreateWithoutTestcaseInput>
    where?: submissionWhereInput
  }

  export type submissionUpdateToOneWithWhereWithoutTestcaseInput = {
    where?: submissionWhereInput
    data: XOR<submissionUpdateWithoutTestcaseInput, submissionUncheckedUpdateWithoutTestcaseInput>
  }

  export type submissionUpdateWithoutTestcaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: problemUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateWithoutTestcaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProblemSolvedInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProblemSolvedInput, userUncheckedCreateWithoutProblemSolvedInput>
  }

  export type problemCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProblemsInput
    submission?: submissionCreateNestedManyWithoutProblemInput
    problemsPlaylists?: problemInPlaylistCreateNestedManyWithoutProblemInput
  }

  export type problemUncheckedCreateWithoutSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: submissionUncheckedCreateNestedManyWithoutProblemInput
    problemsPlaylists?: problemInPlaylistUncheckedCreateNestedManyWithoutProblemInput
  }

  export type problemCreateOrConnectWithoutSolvedByInput = {
    where: problemWhereUniqueInput
    create: XOR<problemCreateWithoutSolvedByInput, problemUncheckedCreateWithoutSolvedByInput>
  }

  export type userUpsertWithoutProblemSolvedInput = {
    update: XOR<userUpdateWithoutProblemSolvedInput, userUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<userCreateWithoutProblemSolvedInput, userUncheckedCreateWithoutProblemSolvedInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProblemSolvedInput, userUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type userUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type problemUpsertWithoutSolvedByInput = {
    update: XOR<problemUpdateWithoutSolvedByInput, problemUncheckedUpdateWithoutSolvedByInput>
    create: XOR<problemCreateWithoutSolvedByInput, problemUncheckedCreateWithoutSolvedByInput>
    where?: problemWhereInput
  }

  export type problemUpdateToOneWithWhereWithoutSolvedByInput = {
    where?: problemWhereInput
    data: XOR<problemUpdateWithoutSolvedByInput, problemUncheckedUpdateWithoutSolvedByInput>
  }

  export type problemUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProblemsNestedInput
    submission?: submissionUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: problemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateWithoutSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: problemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type problemInPlaylistCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: problemCreateNestedOneWithoutProblemsPlaylistsInput
  }

  export type problemInPlaylistUncheckedCreateWithoutPlaylistInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemInPlaylistCreateOrConnectWithoutPlaylistInput = {
    where: problemInPlaylistWhereUniqueInput
    create: XOR<problemInPlaylistCreateWithoutPlaylistInput, problemInPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type problemInPlaylistCreateManyPlaylistInputEnvelope = {
    data: problemInPlaylistCreateManyPlaylistInput | problemInPlaylistCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutPlaylistInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPlaylistInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPlaylistInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPlaylistInput, userUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistPurchaseCreateWithoutPlaylistInput = {
    id?: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
    user: userCreateNestedOneWithoutPurchasesInput
  }

  export type PlaylistPurchaseUncheckedCreateWithoutPlaylistInput = {
    id?: string
    userId: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
  }

  export type PlaylistPurchaseCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistPurchaseWhereUniqueInput
    create: XOR<PlaylistPurchaseCreateWithoutPlaylistInput, PlaylistPurchaseUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistPurchaseCreateManyPlaylistInputEnvelope = {
    data: PlaylistPurchaseCreateManyPlaylistInput | PlaylistPurchaseCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type problemInPlaylistUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: problemInPlaylistWhereUniqueInput
    update: XOR<problemInPlaylistUpdateWithoutPlaylistInput, problemInPlaylistUncheckedUpdateWithoutPlaylistInput>
    create: XOR<problemInPlaylistCreateWithoutPlaylistInput, problemInPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type problemInPlaylistUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: problemInPlaylistWhereUniqueInput
    data: XOR<problemInPlaylistUpdateWithoutPlaylistInput, problemInPlaylistUncheckedUpdateWithoutPlaylistInput>
  }

  export type problemInPlaylistUpdateManyWithWhereWithoutPlaylistInput = {
    where: problemInPlaylistScalarWhereInput
    data: XOR<problemInPlaylistUpdateManyMutationInput, problemInPlaylistUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type userUpsertWithoutPlaylistInput = {
    update: XOR<userUpdateWithoutPlaylistInput, userUncheckedUpdateWithoutPlaylistInput>
    create: XOR<userCreateWithoutPlaylistInput, userUncheckedCreateWithoutPlaylistInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPlaylistInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPlaylistInput, userUncheckedUpdateWithoutPlaylistInput>
  }

  export type userUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistPurchaseUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistPurchaseWhereUniqueInput
    update: XOR<PlaylistPurchaseUpdateWithoutPlaylistInput, PlaylistPurchaseUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistPurchaseCreateWithoutPlaylistInput, PlaylistPurchaseUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistPurchaseUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistPurchaseWhereUniqueInput
    data: XOR<PlaylistPurchaseUpdateWithoutPlaylistInput, PlaylistPurchaseUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistPurchaseUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistPurchaseScalarWhereInput
    data: XOR<PlaylistPurchaseUpdateManyMutationInput, PlaylistPurchaseUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type playlistCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutPlaylistInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutPlaylistInput
  }

  export type playlistUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type playlistCreateOrConnectWithoutProblemsInput = {
    where: playlistWhereUniqueInput
    create: XOR<playlistCreateWithoutProblemsInput, playlistUncheckedCreateWithoutProblemsInput>
  }

  export type problemCreateWithoutProblemsPlaylistsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutProblemsInput
    submission?: submissionCreateNestedManyWithoutProblemInput
    solvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type problemUncheckedCreateWithoutProblemsPlaylistsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submission?: submissionUncheckedCreateNestedManyWithoutProblemInput
    solvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type problemCreateOrConnectWithoutProblemsPlaylistsInput = {
    where: problemWhereUniqueInput
    create: XOR<problemCreateWithoutProblemsPlaylistsInput, problemUncheckedCreateWithoutProblemsPlaylistsInput>
  }

  export type playlistUpsertWithoutProblemsInput = {
    update: XOR<playlistUpdateWithoutProblemsInput, playlistUncheckedUpdateWithoutProblemsInput>
    create: XOR<playlistCreateWithoutProblemsInput, playlistUncheckedCreateWithoutProblemsInput>
    where?: playlistWhereInput
  }

  export type playlistUpdateToOneWithWhereWithoutProblemsInput = {
    where?: playlistWhereInput
    data: XOR<playlistUpdateWithoutProblemsInput, playlistUncheckedUpdateWithoutProblemsInput>
  }

  export type playlistUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPlaylistNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type problemUpsertWithoutProblemsPlaylistsInput = {
    update: XOR<problemUpdateWithoutProblemsPlaylistsInput, problemUncheckedUpdateWithoutProblemsPlaylistsInput>
    create: XOR<problemCreateWithoutProblemsPlaylistsInput, problemUncheckedCreateWithoutProblemsPlaylistsInput>
    where?: problemWhereInput
  }

  export type problemUpdateToOneWithWhereWithoutProblemsPlaylistsInput = {
    where?: problemWhereInput
    data: XOR<problemUpdateWithoutProblemsPlaylistsInput, problemUncheckedUpdateWithoutProblemsPlaylistsInput>
  }

  export type problemUpdateWithoutProblemsPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProblemsNestedInput
    submission?: submissionUpdateManyWithoutProblemNestedInput
    solvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateWithoutProblemsPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type userCreateWithoutPurchasesInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPurchasesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPurchasesInput, userUncheckedCreateWithoutPurchasesInput>
  }

  export type playlistCreateWithoutPurchasesInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemInPlaylistCreateNestedManyWithoutPlaylistInput
    user: userCreateNestedOneWithoutPlaylistInput
  }

  export type playlistUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemInPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type playlistCreateOrConnectWithoutPurchasesInput = {
    where: playlistWhereUniqueInput
    create: XOR<playlistCreateWithoutPurchasesInput, playlistUncheckedCreateWithoutPurchasesInput>
  }

  export type userUpsertWithoutPurchasesInput = {
    update: XOR<userUpdateWithoutPurchasesInput, userUncheckedUpdateWithoutPurchasesInput>
    create: XOR<userCreateWithoutPurchasesInput, userUncheckedCreateWithoutPurchasesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPurchasesInput, userUncheckedUpdateWithoutPurchasesInput>
  }

  export type userUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type playlistUpsertWithoutPurchasesInput = {
    update: XOR<playlistUpdateWithoutPurchasesInput, playlistUncheckedUpdateWithoutPurchasesInput>
    create: XOR<playlistCreateWithoutPurchasesInput, playlistUncheckedCreateWithoutPurchasesInput>
    where?: playlistWhereInput
  }

  export type playlistUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: playlistWhereInput
    data: XOR<playlistUpdateWithoutPurchasesInput, playlistUncheckedUpdateWithoutPurchasesInput>
  }

  export type playlistUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemInPlaylistUpdateManyWithoutPlaylistNestedInput
    user?: userUpdateOneRequiredWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type userCreateWithoutTasksInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTasksInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTasksInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTasksInput, userUncheckedCreateWithoutTasksInput>
  }

  export type NotificationCreateWithoutTaskInput = {
    id?: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
    user: userCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutTaskInput = {
    id?: string
    userId: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutTaskInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput>
  }

  export type NotificationCreateManyTaskInputEnvelope = {
    data: NotificationCreateManyTaskInput | NotificationCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutTasksInput = {
    update: XOR<userUpdateWithoutTasksInput, userUncheckedUpdateWithoutTasksInput>
    create: XOR<userCreateWithoutTasksInput, userUncheckedCreateWithoutTasksInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTasksInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTasksInput, userUncheckedUpdateWithoutTasksInput>
  }

  export type userUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutTaskInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutTaskInput, NotificationUncheckedUpdateWithoutTaskInput>
    create: XOR<NotificationCreateWithoutTaskInput, NotificationUncheckedCreateWithoutTaskInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutTaskInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutTaskInput, NotificationUncheckedUpdateWithoutTaskInput>
  }

  export type NotificationUpdateManyWithWhereWithoutTaskInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutNotificationsInput = {
    id?: string
    deadline: Date | string
    status?: $Enums.taskStatus
    task: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutNotificationsInput = {
    id?: string
    userId: string
    deadline: Date | string
    status?: $Enums.taskStatus
    task: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutNotificationsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutNotificationsInput, TaskUncheckedCreateWithoutNotificationsInput>
  }

  export type userCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
    playlist?: playlistCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.userRole
    password?: string | null
    isVerified?: boolean
    authProvider?: $Enums.authSource
    refreshToken?: string | null
    verificationCode?: string | null
    purchasedPlaylist?: userCreatepurchasedPlaylistInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: problemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
    playlist?: playlistUncheckedCreateNestedManyWithoutUserInput
    purchases?: PlaylistPurchaseUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutNotificationsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
  }

  export type TaskUpsertWithoutNotificationsInput = {
    update: XOR<TaskUpdateWithoutNotificationsInput, TaskUncheckedUpdateWithoutNotificationsInput>
    create: XOR<TaskCreateWithoutNotificationsInput, TaskUncheckedCreateWithoutNotificationsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutNotificationsInput, TaskUncheckedUpdateWithoutNotificationsInput>
  }

  export type TaskUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithoutNotificationsInput = {
    update: XOR<userUpdateWithoutNotificationsInput, userUncheckedUpdateWithoutNotificationsInput>
    create: XOR<userCreateWithoutNotificationsInput, userUncheckedCreateWithoutNotificationsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotificationsInput, userUncheckedUpdateWithoutNotificationsInput>
  }

  export type userUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
    playlist?: playlistUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumuserRoleFieldUpdateOperationsInput | $Enums.userRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    authProvider?: EnumauthSourceFieldUpdateOperationsInput | $Enums.authSource
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedPlaylist?: userUpdatepurchasedPlaylistInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
    playlist?: playlistUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type problemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: problemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: string | null
    testCases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateManyUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type playlistCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    coverImage?: string | null
    isPaid?: boolean
    basePrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistPurchaseCreateManyUserInput = {
    id?: string
    playlistId: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
  }

  export type TaskCreateManyUserInput = {
    id?: string
    deadline: Date | string
    status?: $Enums.taskStatus
    task: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    taskId: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
  }

  export type problemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUpdateManyWithoutProblemNestedInput
    solvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: problemInPlaylistUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUncheckedUpdateManyWithoutProblemNestedInput
    solvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
    problemsPlaylists?: problemInPlaylistUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: problemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: JsonNullValueInput | InputJsonValue
    hints?: NullableJsonNullValueInput | InputJsonValue
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testCases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referenceSolution?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: problemUpdateOneRequiredWithoutSolvedByNestedInput
  }

  export type problemSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type playlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemInPlaylistUpdateManyWithoutPlaylistNestedInput
    purchases?: PlaylistPurchaseUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: problemInPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
    purchases?: PlaylistPurchaseUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type playlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    basePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistPurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    playlist?: playlistUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PlaylistPurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PlaylistPurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumtaskStatusFieldUpdateOperationsInput | $Enums.taskStatus
    task?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type submissionCreateManyProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateManyProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemInPlaylistCreateManyProblemInput = {
    id?: string
    playListId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type submissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testcase?: testcaseUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testcase?: testcaseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type problemSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemInPlaylistUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: playlistUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type problemInPlaylistUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playListId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemInPlaylistUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playListId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testcaseCreateManySubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout?: string | null
    expected: string
    stderr?: string | null
    compileOutput?: string | null
    status: $Enums.submissionStatus
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type testcaseUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testcaseUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type testcaseUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsubmissionStatusFieldUpdateOperationsInput | $Enums.submissionStatus
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemInPlaylistCreateManyPlaylistInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistPurchaseCreateManyPlaylistInput = {
    id?: string
    userId: string
    playlistName: string
    razorpayPaymentLinkId: string
    razorpayPaymentLinkStatus: string
    razorpayPaymentLinkRefereceId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    purchasedAt?: Date | string
    amount: number
  }

  export type problemInPlaylistUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: problemUpdateOneRequiredWithoutProblemsPlaylistsNestedInput
  }

  export type problemInPlaylistUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemInPlaylistUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistPurchaseUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PlaylistPurchaseUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PlaylistPurchaseUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playlistName?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkStatus?: StringFieldUpdateOperationsInput | string
    razorpayPaymentLinkRefereceId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type NotificationCreateManyTaskInput = {
    id?: string
    userId: string
    sent?: boolean
    notifyAt: string
    createdAt?: Date | string
  }

  export type NotificationUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sent?: BoolFieldUpdateOperationsInput | boolean
    notifyAt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}