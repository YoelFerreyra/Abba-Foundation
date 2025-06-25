
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model HealthInsuranceProvider
 * 
 */
export type HealthInsuranceProvider = $Result.DefaultSelection<Prisma.$HealthInsuranceProviderPayload>
/**
 * Model LegalGuardian
 * 
 */
export type LegalGuardian = $Result.DefaultSelection<Prisma.$LegalGuardianPayload>
/**
 * Model Professional
 * 
 */
export type Professional = $Result.DefaultSelection<Prisma.$ProfessionalPayload>
/**
 * Model Admission
 * 
 */
export type Admission = $Result.DefaultSelection<Prisma.$AdmissionPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Process
 * 
 */
export type Process = $Result.DefaultSelection<Prisma.$ProcessPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRoles: {
  ROOT: 'ROOT',
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
  PROFESSIONAL: 'PROFESSIONAL',
  ACCOUNTANT: 'ACCOUNTANT'
};

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles]


export const PatientType: {
  CHILD: 'CHILD',
  ADULT: 'ADULT',
  SENIOR: 'SENIOR'
};

export type PatientType = (typeof PatientType)[keyof typeof PatientType]


export const PatientStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DISCHARGED: 'DISCHARGED',
  PENDING: 'PENDING'
};

export type PatientStatus = (typeof PatientStatus)[keyof typeof PatientStatus]


export const LegalGuardianType: {
  PARENT: 'PARENT',
  SIBLING: 'SIBLING',
  OTHER: 'OTHER'
};

export type LegalGuardianType = (typeof LegalGuardianType)[keyof typeof LegalGuardianType]


export const LegalGuardianStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  VERIFIED: 'VERIFIED',
  UNVERIFIED: 'UNVERIFIED'
};

export type LegalGuardianStatus = (typeof LegalGuardianStatus)[keyof typeof LegalGuardianStatus]


export const AdmissionStatus: {
  PENDING_DOCUMENTATION: 'PENDING_DOCUMENTATION',
  DOCUMENTS_COMPLETED: 'DOCUMENTS_COMPLETED',
  ADMITTED: 'ADMITTED',
  REJECTED: 'REJECTED'
};

export type AdmissionStatus = (typeof AdmissionStatus)[keyof typeof AdmissionStatus]


export const ProcessType: {
  INITIAL: 'INITIAL',
  FOLLOW_UP: 'FOLLOW_UP',
  FINAL: 'FINAL'
};

export type ProcessType = (typeof ProcessType)[keyof typeof ProcessType]


export const ProcessStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ProcessStatus = (typeof ProcessStatus)[keyof typeof ProcessStatus]


export const BudgetStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type BudgetStatus = (typeof BudgetStatus)[keyof typeof BudgetStatus]


export const PaymentType: {
  CASH: 'CASH',
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  TRANSFER: 'TRANSFER',
  OTHER: 'OTHER'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const WeekDay: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay]


export const EventStatus: {
  AVAILABLE: 'AVAILABLE',
  SCHEDULED: 'SCHEDULED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const EventType: {
  CONSULTATION: 'CONSULTATION',
  STUDY: 'STUDY',
  OTHER: 'OTHER'
};

export type EventType = (typeof EventType)[keyof typeof EventType]

}

export type UserRoles = $Enums.UserRoles

export const UserRoles: typeof $Enums.UserRoles

export type PatientType = $Enums.PatientType

export const PatientType: typeof $Enums.PatientType

export type PatientStatus = $Enums.PatientStatus

export const PatientStatus: typeof $Enums.PatientStatus

export type LegalGuardianType = $Enums.LegalGuardianType

export const LegalGuardianType: typeof $Enums.LegalGuardianType

export type LegalGuardianStatus = $Enums.LegalGuardianStatus

export const LegalGuardianStatus: typeof $Enums.LegalGuardianStatus

export type AdmissionStatus = $Enums.AdmissionStatus

export const AdmissionStatus: typeof $Enums.AdmissionStatus

export type ProcessType = $Enums.ProcessType

export const ProcessType: typeof $Enums.ProcessType

export type ProcessStatus = $Enums.ProcessStatus

export const ProcessStatus: typeof $Enums.ProcessStatus

export type BudgetStatus = $Enums.BudgetStatus

export const BudgetStatus: typeof $Enums.BudgetStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type WeekDay = $Enums.WeekDay

export const WeekDay: typeof $Enums.WeekDay

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healthInsuranceProvider`: Exposes CRUD operations for the **HealthInsuranceProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthInsuranceProviders
    * const healthInsuranceProviders = await prisma.healthInsuranceProvider.findMany()
    * ```
    */
  get healthInsuranceProvider(): Prisma.HealthInsuranceProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.legalGuardian`: Exposes CRUD operations for the **LegalGuardian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegalGuardians
    * const legalGuardians = await prisma.legalGuardian.findMany()
    * ```
    */
  get legalGuardian(): Prisma.LegalGuardianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professional`: Exposes CRUD operations for the **Professional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professionals
    * const professionals = await prisma.professional.findMany()
    * ```
    */
  get professional(): Prisma.ProfessionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admission`: Exposes CRUD operations for the **Admission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admissions
    * const admissions = await prisma.admission.findMany()
    * ```
    */
  get admission(): Prisma.AdmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.process`: Exposes CRUD operations for the **Process** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processes
    * const processes = await prisma.process.findMany()
    * ```
    */
  get process(): Prisma.ProcessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Patient: 'Patient',
    HealthInsuranceProvider: 'HealthInsuranceProvider',
    LegalGuardian: 'LegalGuardian',
    Professional: 'Professional',
    Admission: 'Admission',
    Event: 'Event',
    Process: 'Process',
    Budget: 'Budget',
    Payment: 'Payment',
    Schedule: 'Schedule'
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
      modelProps: "user" | "patient" | "healthInsuranceProvider" | "legalGuardian" | "professional" | "admission" | "event" | "process" | "budget" | "payment" | "schedule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      HealthInsuranceProvider: {
        payload: Prisma.$HealthInsuranceProviderPayload<ExtArgs>
        fields: Prisma.HealthInsuranceProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthInsuranceProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthInsuranceProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>
          }
          findFirst: {
            args: Prisma.HealthInsuranceProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthInsuranceProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>
          }
          findMany: {
            args: Prisma.HealthInsuranceProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>[]
          }
          create: {
            args: Prisma.HealthInsuranceProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>
          }
          createMany: {
            args: Prisma.HealthInsuranceProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthInsuranceProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>[]
          }
          delete: {
            args: Prisma.HealthInsuranceProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>
          }
          update: {
            args: Prisma.HealthInsuranceProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>
          }
          deleteMany: {
            args: Prisma.HealthInsuranceProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthInsuranceProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthInsuranceProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>[]
          }
          upsert: {
            args: Prisma.HealthInsuranceProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthInsuranceProviderPayload>
          }
          aggregate: {
            args: Prisma.HealthInsuranceProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthInsuranceProvider>
          }
          groupBy: {
            args: Prisma.HealthInsuranceProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthInsuranceProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthInsuranceProviderCountArgs<ExtArgs>
            result: $Utils.Optional<HealthInsuranceProviderCountAggregateOutputType> | number
          }
        }
      }
      LegalGuardian: {
        payload: Prisma.$LegalGuardianPayload<ExtArgs>
        fields: Prisma.LegalGuardianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegalGuardianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegalGuardianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>
          }
          findFirst: {
            args: Prisma.LegalGuardianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegalGuardianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>
          }
          findMany: {
            args: Prisma.LegalGuardianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>[]
          }
          create: {
            args: Prisma.LegalGuardianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>
          }
          createMany: {
            args: Prisma.LegalGuardianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegalGuardianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>[]
          }
          delete: {
            args: Prisma.LegalGuardianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>
          }
          update: {
            args: Prisma.LegalGuardianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>
          }
          deleteMany: {
            args: Prisma.LegalGuardianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegalGuardianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegalGuardianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>[]
          }
          upsert: {
            args: Prisma.LegalGuardianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegalGuardianPayload>
          }
          aggregate: {
            args: Prisma.LegalGuardianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLegalGuardian>
          }
          groupBy: {
            args: Prisma.LegalGuardianGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegalGuardianGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegalGuardianCountArgs<ExtArgs>
            result: $Utils.Optional<LegalGuardianCountAggregateOutputType> | number
          }
        }
      }
      Professional: {
        payload: Prisma.$ProfessionalPayload<ExtArgs>
        fields: Prisma.ProfessionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findFirst: {
            args: Prisma.ProfessionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findMany: {
            args: Prisma.ProfessionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          create: {
            args: Prisma.ProfessionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          createMany: {
            args: Prisma.ProfessionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          delete: {
            args: Prisma.ProfessionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          update: {
            args: Prisma.ProfessionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          aggregate: {
            args: Prisma.ProfessionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessional>
          }
          groupBy: {
            args: Prisma.ProfessionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalCountAggregateOutputType> | number
          }
        }
      }
      Admission: {
        payload: Prisma.$AdmissionPayload<ExtArgs>
        fields: Prisma.AdmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          findFirst: {
            args: Prisma.AdmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          findMany: {
            args: Prisma.AdmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          create: {
            args: Prisma.AdmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          createMany: {
            args: Prisma.AdmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          delete: {
            args: Prisma.AdmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          update: {
            args: Prisma.AdmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          upsert: {
            args: Prisma.AdmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          aggregate: {
            args: Prisma.AdmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmission>
          }
          groupBy: {
            args: Prisma.AdmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmissionCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Process: {
        payload: Prisma.$ProcessPayload<ExtArgs>
        fields: Prisma.ProcessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          findFirst: {
            args: Prisma.ProcessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          findMany: {
            args: Prisma.ProcessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          create: {
            args: Prisma.ProcessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          createMany: {
            args: Prisma.ProcessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          delete: {
            args: Prisma.ProcessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          update: {
            args: Prisma.ProcessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          deleteMany: {
            args: Prisma.ProcessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          upsert: {
            args: Prisma.ProcessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          aggregate: {
            args: Prisma.ProcessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcess>
          }
          groupBy: {
            args: Prisma.ProcessGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BudgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
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
    user?: UserOmit
    patient?: PatientOmit
    healthInsuranceProvider?: HealthInsuranceProviderOmit
    legalGuardian?: LegalGuardianOmit
    professional?: ProfessionalOmit
    admission?: AdmissionOmit
    event?: EventOmit
    process?: ProcessOmit
    budget?: BudgetOmit
    payment?: PaymentOmit
    schedule?: ScheduleOmit
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
    createdEvents: number
    createdProcesses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdEvents?: boolean | UserCountOutputTypeCountCreatedEventsArgs
    createdProcesses?: boolean | UserCountOutputTypeCountCreatedProcessesArgs
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
  export type UserCountOutputTypeCountCreatedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    events: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | PatientCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type LegalGuardianCountOutputType
   */

  export type LegalGuardianCountOutputType = {
    patients: number
  }

  export type LegalGuardianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | LegalGuardianCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * LegalGuardianCountOutputType without action
   */
  export type LegalGuardianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardianCountOutputType
     */
    select?: LegalGuardianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LegalGuardianCountOutputType without action
   */
  export type LegalGuardianCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }


  /**
   * Count Type ProfessionalCountOutputType
   */

  export type ProfessionalCountOutputType = {
    events: number
    schedules: number
  }

  export type ProfessionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ProfessionalCountOutputTypeCountEventsArgs
    schedules?: boolean | ProfessionalCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalCountOutputType
     */
    select?: ProfessionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firebaseUid: string | null
    role: $Enums.UserRoles | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firebaseUid: string | null
    role: $Enums.UserRoles | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firebaseUid: number
    role: number
    email: number
    isActive: number
    createdAt: number
    image: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firebaseUid?: true
    role?: true
    email?: true
    isActive?: true
    createdAt?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firebaseUid?: true
    role?: true
    email?: true
    isActive?: true
    createdAt?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firebaseUid?: true
    role?: true
    email?: true
    isActive?: true
    createdAt?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firebaseUid: string
    role: $Enums.UserRoles
    email: string
    isActive: boolean
    createdAt: Date
    image: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    role?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    image?: boolean
    patient?: boolean | User$patientArgs<ExtArgs>
    legalGuardian?: boolean | User$legalGuardianArgs<ExtArgs>
    professional?: boolean | User$professionalArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    createdProcesses?: boolean | User$createdProcessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    role?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    role?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firebaseUid?: boolean
    role?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firebaseUid" | "role" | "email" | "isActive" | "createdAt" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | User$patientArgs<ExtArgs>
    legalGuardian?: boolean | User$legalGuardianArgs<ExtArgs>
    professional?: boolean | User$professionalArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    createdProcesses?: boolean | User$createdProcessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs> | null
      legalGuardian: Prisma.$LegalGuardianPayload<ExtArgs> | null
      professional: Prisma.$ProfessionalPayload<ExtArgs> | null
      createdEvents: Prisma.$EventPayload<ExtArgs>[]
      createdProcesses: Prisma.$ProcessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firebaseUid: string
      role: $Enums.UserRoles
      email: string
      isActive: boolean
      createdAt: Date
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    legalGuardian<T extends User$legalGuardianArgs<ExtArgs> = {}>(args?: Subset<T, User$legalGuardianArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    professional<T extends User$professionalArgs<ExtArgs> = {}>(args?: Subset<T, User$professionalArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdEvents<T extends User$createdEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdProcesses<T extends User$createdProcessesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdProcessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firebaseUid: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRoles'>
    readonly email: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.legalGuardian
   */
  export type User$legalGuardianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    where?: LegalGuardianWhereInput
  }

  /**
   * User.professional
   */
  export type User$professionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
  }

  /**
   * User.createdEvents
   */
  export type User$createdEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.createdProcesses
   */
  export type User$createdProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    where?: ProcessWhereInput
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    cursor?: ProcessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    legalGuardianId: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    userId: number | null
    legalGuardianId: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    dni: string | null
    cuil: string | null
    dniProcessingNumber: string | null
    birthday: Date | null
    phone: string | null
    affiliateNumber: string | null
    professionalActivity: string | null
    healthInsuranceProvider: string | null
    patientType: $Enums.PatientType | null
    patientStatus: $Enums.PatientStatus | null
    isActive: boolean | null
    createdAt: Date | null
    userId: number | null
    legalGuardianId: number | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    dni: string | null
    cuil: string | null
    dniProcessingNumber: string | null
    birthday: Date | null
    phone: string | null
    affiliateNumber: string | null
    professionalActivity: string | null
    healthInsuranceProvider: string | null
    patientType: $Enums.PatientType | null
    patientStatus: $Enums.PatientStatus | null
    isActive: boolean | null
    createdAt: Date | null
    userId: number | null
    legalGuardianId: number | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    address: number
    dni: number
    cuil: number
    dniProcessingNumber: number
    birthday: number
    phone: number
    affiliateNumber: number
    professionalActivity: number
    healthInsuranceProvider: number
    patientType: number
    patientStatus: number
    isActive: number
    createdAt: number
    userId: number
    legalGuardianId: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    userId?: true
    legalGuardianId?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    userId?: true
    legalGuardianId?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    dniProcessingNumber?: true
    birthday?: true
    phone?: true
    affiliateNumber?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    patientType?: true
    patientStatus?: true
    isActive?: true
    createdAt?: true
    userId?: true
    legalGuardianId?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    dniProcessingNumber?: true
    birthday?: true
    phone?: true
    affiliateNumber?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    patientType?: true
    patientStatus?: true
    isActive?: true
    createdAt?: true
    userId?: true
    legalGuardianId?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    dniProcessingNumber?: true
    birthday?: true
    phone?: true
    affiliateNumber?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    patientType?: true
    patientStatus?: true
    isActive?: true
    createdAt?: true
    userId?: true
    legalGuardianId?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date
    phone: string
    affiliateNumber: string
    professionalActivity: string | null
    healthInsuranceProvider: string | null
    patientType: $Enums.PatientType | null
    patientStatus: $Enums.PatientStatus | null
    isActive: boolean
    createdAt: Date
    userId: number | null
    legalGuardianId: number | null
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    dniProcessingNumber?: boolean
    birthday?: boolean
    phone?: boolean
    affiliateNumber?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    patientType?: boolean
    patientStatus?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    legalGuardianId?: boolean
    user?: boolean | Patient$userArgs<ExtArgs>
    legalGuardian?: boolean | Patient$legalGuardianArgs<ExtArgs>
    events?: boolean | Patient$eventsArgs<ExtArgs>
    admission?: boolean | Patient$admissionArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    dniProcessingNumber?: boolean
    birthday?: boolean
    phone?: boolean
    affiliateNumber?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    patientType?: boolean
    patientStatus?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    legalGuardianId?: boolean
    user?: boolean | Patient$userArgs<ExtArgs>
    legalGuardian?: boolean | Patient$legalGuardianArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    dniProcessingNumber?: boolean
    birthday?: boolean
    phone?: boolean
    affiliateNumber?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    patientType?: boolean
    patientStatus?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    legalGuardianId?: boolean
    user?: boolean | Patient$userArgs<ExtArgs>
    legalGuardian?: boolean | Patient$legalGuardianArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    dniProcessingNumber?: boolean
    birthday?: boolean
    phone?: boolean
    affiliateNumber?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    patientType?: boolean
    patientStatus?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    legalGuardianId?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "address" | "dni" | "cuil" | "dniProcessingNumber" | "birthday" | "phone" | "affiliateNumber" | "professionalActivity" | "healthInsuranceProvider" | "patientType" | "patientStatus" | "isActive" | "createdAt" | "userId" | "legalGuardianId", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Patient$userArgs<ExtArgs>
    legalGuardian?: boolean | Patient$legalGuardianArgs<ExtArgs>
    events?: boolean | Patient$eventsArgs<ExtArgs>
    admission?: boolean | Patient$admissionArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Patient$userArgs<ExtArgs>
    legalGuardian?: boolean | Patient$legalGuardianArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Patient$userArgs<ExtArgs>
    legalGuardian?: boolean | Patient$legalGuardianArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      legalGuardian: Prisma.$LegalGuardianPayload<ExtArgs> | null
      events: Prisma.$EventPayload<ExtArgs>[]
      admission: Prisma.$AdmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      address: string
      dni: string
      cuil: string
      dniProcessingNumber: string
      birthday: Date
      phone: string
      affiliateNumber: string
      professionalActivity: string | null
      healthInsuranceProvider: string | null
      patientType: $Enums.PatientType | null
      patientStatus: $Enums.PatientStatus | null
      isActive: boolean
      createdAt: Date
      userId: number | null
      legalGuardianId: number | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Patient$userArgs<ExtArgs> = {}>(args?: Subset<T, Patient$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    legalGuardian<T extends Patient$legalGuardianArgs<ExtArgs> = {}>(args?: Subset<T, Patient$legalGuardianArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events<T extends Patient$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admission<T extends Patient$admissionArgs<ExtArgs> = {}>(args?: Subset<T, Patient$admissionArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly firstName: FieldRef<"Patient", 'String'>
    readonly lastName: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly dni: FieldRef<"Patient", 'String'>
    readonly cuil: FieldRef<"Patient", 'String'>
    readonly dniProcessingNumber: FieldRef<"Patient", 'String'>
    readonly birthday: FieldRef<"Patient", 'DateTime'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly affiliateNumber: FieldRef<"Patient", 'String'>
    readonly professionalActivity: FieldRef<"Patient", 'String'>
    readonly healthInsuranceProvider: FieldRef<"Patient", 'String'>
    readonly patientType: FieldRef<"Patient", 'PatientType'>
    readonly patientStatus: FieldRef<"Patient", 'PatientStatus'>
    readonly isActive: FieldRef<"Patient", 'Boolean'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly userId: FieldRef<"Patient", 'Int'>
    readonly legalGuardianId: FieldRef<"Patient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.user
   */
  export type Patient$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Patient.legalGuardian
   */
  export type Patient$legalGuardianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    where?: LegalGuardianWhereInput
  }

  /**
   * Patient.events
   */
  export type Patient$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Patient.admission
   */
  export type Patient$admissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model HealthInsuranceProvider
   */

  export type AggregateHealthInsuranceProvider = {
    _count: HealthInsuranceProviderCountAggregateOutputType | null
    _avg: HealthInsuranceProviderAvgAggregateOutputType | null
    _sum: HealthInsuranceProviderSumAggregateOutputType | null
    _min: HealthInsuranceProviderMinAggregateOutputType | null
    _max: HealthInsuranceProviderMaxAggregateOutputType | null
  }

  export type HealthInsuranceProviderAvgAggregateOutputType = {
    id: number | null
  }

  export type HealthInsuranceProviderSumAggregateOutputType = {
    id: number | null
  }

  export type HealthInsuranceProviderMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    cuit: string | null
    address: string | null
    email: string | null
    phone: string | null
    contact: string | null
  }

  export type HealthInsuranceProviderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    cuit: string | null
    address: string | null
    email: string | null
    phone: string | null
    contact: string | null
  }

  export type HealthInsuranceProviderCountAggregateOutputType = {
    id: number
    name: number
    description: number
    cuit: number
    address: number
    email: number
    phone: number
    contact: number
    _all: number
  }


  export type HealthInsuranceProviderAvgAggregateInputType = {
    id?: true
  }

  export type HealthInsuranceProviderSumAggregateInputType = {
    id?: true
  }

  export type HealthInsuranceProviderMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cuit?: true
    address?: true
    email?: true
    phone?: true
    contact?: true
  }

  export type HealthInsuranceProviderMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cuit?: true
    address?: true
    email?: true
    phone?: true
    contact?: true
  }

  export type HealthInsuranceProviderCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    cuit?: true
    address?: true
    email?: true
    phone?: true
    contact?: true
    _all?: true
  }

  export type HealthInsuranceProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthInsuranceProvider to aggregate.
     */
    where?: HealthInsuranceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthInsuranceProviders to fetch.
     */
    orderBy?: HealthInsuranceProviderOrderByWithRelationInput | HealthInsuranceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthInsuranceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthInsuranceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthInsuranceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthInsuranceProviders
    **/
    _count?: true | HealthInsuranceProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthInsuranceProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthInsuranceProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthInsuranceProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthInsuranceProviderMaxAggregateInputType
  }

  export type GetHealthInsuranceProviderAggregateType<T extends HealthInsuranceProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthInsuranceProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthInsuranceProvider[P]>
      : GetScalarType<T[P], AggregateHealthInsuranceProvider[P]>
  }




  export type HealthInsuranceProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthInsuranceProviderWhereInput
    orderBy?: HealthInsuranceProviderOrderByWithAggregationInput | HealthInsuranceProviderOrderByWithAggregationInput[]
    by: HealthInsuranceProviderScalarFieldEnum[] | HealthInsuranceProviderScalarFieldEnum
    having?: HealthInsuranceProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthInsuranceProviderCountAggregateInputType | true
    _avg?: HealthInsuranceProviderAvgAggregateInputType
    _sum?: HealthInsuranceProviderSumAggregateInputType
    _min?: HealthInsuranceProviderMinAggregateInputType
    _max?: HealthInsuranceProviderMaxAggregateInputType
  }

  export type HealthInsuranceProviderGroupByOutputType = {
    id: number
    name: string
    description: string
    cuit: string
    address: string
    email: string
    phone: string
    contact: string
    _count: HealthInsuranceProviderCountAggregateOutputType | null
    _avg: HealthInsuranceProviderAvgAggregateOutputType | null
    _sum: HealthInsuranceProviderSumAggregateOutputType | null
    _min: HealthInsuranceProviderMinAggregateOutputType | null
    _max: HealthInsuranceProviderMaxAggregateOutputType | null
  }

  type GetHealthInsuranceProviderGroupByPayload<T extends HealthInsuranceProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthInsuranceProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthInsuranceProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthInsuranceProviderGroupByOutputType[P]>
            : GetScalarType<T[P], HealthInsuranceProviderGroupByOutputType[P]>
        }
      >
    >


  export type HealthInsuranceProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cuit?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    contact?: boolean
  }, ExtArgs["result"]["healthInsuranceProvider"]>

  export type HealthInsuranceProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cuit?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    contact?: boolean
  }, ExtArgs["result"]["healthInsuranceProvider"]>

  export type HealthInsuranceProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    cuit?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    contact?: boolean
  }, ExtArgs["result"]["healthInsuranceProvider"]>

  export type HealthInsuranceProviderSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    cuit?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    contact?: boolean
  }

  export type HealthInsuranceProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "cuit" | "address" | "email" | "phone" | "contact", ExtArgs["result"]["healthInsuranceProvider"]>

  export type $HealthInsuranceProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthInsuranceProvider"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      cuit: string
      address: string
      email: string
      phone: string
      contact: string
    }, ExtArgs["result"]["healthInsuranceProvider"]>
    composites: {}
  }

  type HealthInsuranceProviderGetPayload<S extends boolean | null | undefined | HealthInsuranceProviderDefaultArgs> = $Result.GetResult<Prisma.$HealthInsuranceProviderPayload, S>

  type HealthInsuranceProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthInsuranceProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthInsuranceProviderCountAggregateInputType | true
    }

  export interface HealthInsuranceProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthInsuranceProvider'], meta: { name: 'HealthInsuranceProvider' } }
    /**
     * Find zero or one HealthInsuranceProvider that matches the filter.
     * @param {HealthInsuranceProviderFindUniqueArgs} args - Arguments to find a HealthInsuranceProvider
     * @example
     * // Get one HealthInsuranceProvider
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthInsuranceProviderFindUniqueArgs>(args: SelectSubset<T, HealthInsuranceProviderFindUniqueArgs<ExtArgs>>): Prisma__HealthInsuranceProviderClient<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealthInsuranceProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthInsuranceProviderFindUniqueOrThrowArgs} args - Arguments to find a HealthInsuranceProvider
     * @example
     * // Get one HealthInsuranceProvider
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthInsuranceProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthInsuranceProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthInsuranceProviderClient<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthInsuranceProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthInsuranceProviderFindFirstArgs} args - Arguments to find a HealthInsuranceProvider
     * @example
     * // Get one HealthInsuranceProvider
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthInsuranceProviderFindFirstArgs>(args?: SelectSubset<T, HealthInsuranceProviderFindFirstArgs<ExtArgs>>): Prisma__HealthInsuranceProviderClient<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthInsuranceProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthInsuranceProviderFindFirstOrThrowArgs} args - Arguments to find a HealthInsuranceProvider
     * @example
     * // Get one HealthInsuranceProvider
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthInsuranceProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthInsuranceProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthInsuranceProviderClient<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealthInsuranceProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthInsuranceProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthInsuranceProviders
     * const healthInsuranceProviders = await prisma.healthInsuranceProvider.findMany()
     * 
     * // Get first 10 HealthInsuranceProviders
     * const healthInsuranceProviders = await prisma.healthInsuranceProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthInsuranceProviderWithIdOnly = await prisma.healthInsuranceProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthInsuranceProviderFindManyArgs>(args?: SelectSubset<T, HealthInsuranceProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealthInsuranceProvider.
     * @param {HealthInsuranceProviderCreateArgs} args - Arguments to create a HealthInsuranceProvider.
     * @example
     * // Create one HealthInsuranceProvider
     * const HealthInsuranceProvider = await prisma.healthInsuranceProvider.create({
     *   data: {
     *     // ... data to create a HealthInsuranceProvider
     *   }
     * })
     * 
     */
    create<T extends HealthInsuranceProviderCreateArgs>(args: SelectSubset<T, HealthInsuranceProviderCreateArgs<ExtArgs>>): Prisma__HealthInsuranceProviderClient<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealthInsuranceProviders.
     * @param {HealthInsuranceProviderCreateManyArgs} args - Arguments to create many HealthInsuranceProviders.
     * @example
     * // Create many HealthInsuranceProviders
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthInsuranceProviderCreateManyArgs>(args?: SelectSubset<T, HealthInsuranceProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HealthInsuranceProviders and returns the data saved in the database.
     * @param {HealthInsuranceProviderCreateManyAndReturnArgs} args - Arguments to create many HealthInsuranceProviders.
     * @example
     * // Create many HealthInsuranceProviders
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HealthInsuranceProviders and only return the `id`
     * const healthInsuranceProviderWithIdOnly = await prisma.healthInsuranceProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthInsuranceProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthInsuranceProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HealthInsuranceProvider.
     * @param {HealthInsuranceProviderDeleteArgs} args - Arguments to delete one HealthInsuranceProvider.
     * @example
     * // Delete one HealthInsuranceProvider
     * const HealthInsuranceProvider = await prisma.healthInsuranceProvider.delete({
     *   where: {
     *     // ... filter to delete one HealthInsuranceProvider
     *   }
     * })
     * 
     */
    delete<T extends HealthInsuranceProviderDeleteArgs>(args: SelectSubset<T, HealthInsuranceProviderDeleteArgs<ExtArgs>>): Prisma__HealthInsuranceProviderClient<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealthInsuranceProvider.
     * @param {HealthInsuranceProviderUpdateArgs} args - Arguments to update one HealthInsuranceProvider.
     * @example
     * // Update one HealthInsuranceProvider
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthInsuranceProviderUpdateArgs>(args: SelectSubset<T, HealthInsuranceProviderUpdateArgs<ExtArgs>>): Prisma__HealthInsuranceProviderClient<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealthInsuranceProviders.
     * @param {HealthInsuranceProviderDeleteManyArgs} args - Arguments to filter HealthInsuranceProviders to delete.
     * @example
     * // Delete a few HealthInsuranceProviders
     * const { count } = await prisma.healthInsuranceProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthInsuranceProviderDeleteManyArgs>(args?: SelectSubset<T, HealthInsuranceProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthInsuranceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthInsuranceProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthInsuranceProviders
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthInsuranceProviderUpdateManyArgs>(args: SelectSubset<T, HealthInsuranceProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthInsuranceProviders and returns the data updated in the database.
     * @param {HealthInsuranceProviderUpdateManyAndReturnArgs} args - Arguments to update many HealthInsuranceProviders.
     * @example
     * // Update many HealthInsuranceProviders
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HealthInsuranceProviders and only return the `id`
     * const healthInsuranceProviderWithIdOnly = await prisma.healthInsuranceProvider.updateManyAndReturn({
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
    updateManyAndReturn<T extends HealthInsuranceProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthInsuranceProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HealthInsuranceProvider.
     * @param {HealthInsuranceProviderUpsertArgs} args - Arguments to update or create a HealthInsuranceProvider.
     * @example
     * // Update or create a HealthInsuranceProvider
     * const healthInsuranceProvider = await prisma.healthInsuranceProvider.upsert({
     *   create: {
     *     // ... data to create a HealthInsuranceProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthInsuranceProvider we want to update
     *   }
     * })
     */
    upsert<T extends HealthInsuranceProviderUpsertArgs>(args: SelectSubset<T, HealthInsuranceProviderUpsertArgs<ExtArgs>>): Prisma__HealthInsuranceProviderClient<$Result.GetResult<Prisma.$HealthInsuranceProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealthInsuranceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthInsuranceProviderCountArgs} args - Arguments to filter HealthInsuranceProviders to count.
     * @example
     * // Count the number of HealthInsuranceProviders
     * const count = await prisma.healthInsuranceProvider.count({
     *   where: {
     *     // ... the filter for the HealthInsuranceProviders we want to count
     *   }
     * })
    **/
    count<T extends HealthInsuranceProviderCountArgs>(
      args?: Subset<T, HealthInsuranceProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthInsuranceProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthInsuranceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthInsuranceProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealthInsuranceProviderAggregateArgs>(args: Subset<T, HealthInsuranceProviderAggregateArgs>): Prisma.PrismaPromise<GetHealthInsuranceProviderAggregateType<T>>

    /**
     * Group by HealthInsuranceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthInsuranceProviderGroupByArgs} args - Group by arguments.
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
      T extends HealthInsuranceProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthInsuranceProviderGroupByArgs['orderBy'] }
        : { orderBy?: HealthInsuranceProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HealthInsuranceProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthInsuranceProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthInsuranceProvider model
   */
  readonly fields: HealthInsuranceProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthInsuranceProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthInsuranceProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the HealthInsuranceProvider model
   */
  interface HealthInsuranceProviderFieldRefs {
    readonly id: FieldRef<"HealthInsuranceProvider", 'Int'>
    readonly name: FieldRef<"HealthInsuranceProvider", 'String'>
    readonly description: FieldRef<"HealthInsuranceProvider", 'String'>
    readonly cuit: FieldRef<"HealthInsuranceProvider", 'String'>
    readonly address: FieldRef<"HealthInsuranceProvider", 'String'>
    readonly email: FieldRef<"HealthInsuranceProvider", 'String'>
    readonly phone: FieldRef<"HealthInsuranceProvider", 'String'>
    readonly contact: FieldRef<"HealthInsuranceProvider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HealthInsuranceProvider findUnique
   */
  export type HealthInsuranceProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * Filter, which HealthInsuranceProvider to fetch.
     */
    where: HealthInsuranceProviderWhereUniqueInput
  }

  /**
   * HealthInsuranceProvider findUniqueOrThrow
   */
  export type HealthInsuranceProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * Filter, which HealthInsuranceProvider to fetch.
     */
    where: HealthInsuranceProviderWhereUniqueInput
  }

  /**
   * HealthInsuranceProvider findFirst
   */
  export type HealthInsuranceProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * Filter, which HealthInsuranceProvider to fetch.
     */
    where?: HealthInsuranceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthInsuranceProviders to fetch.
     */
    orderBy?: HealthInsuranceProviderOrderByWithRelationInput | HealthInsuranceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthInsuranceProviders.
     */
    cursor?: HealthInsuranceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthInsuranceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthInsuranceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthInsuranceProviders.
     */
    distinct?: HealthInsuranceProviderScalarFieldEnum | HealthInsuranceProviderScalarFieldEnum[]
  }

  /**
   * HealthInsuranceProvider findFirstOrThrow
   */
  export type HealthInsuranceProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * Filter, which HealthInsuranceProvider to fetch.
     */
    where?: HealthInsuranceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthInsuranceProviders to fetch.
     */
    orderBy?: HealthInsuranceProviderOrderByWithRelationInput | HealthInsuranceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthInsuranceProviders.
     */
    cursor?: HealthInsuranceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthInsuranceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthInsuranceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthInsuranceProviders.
     */
    distinct?: HealthInsuranceProviderScalarFieldEnum | HealthInsuranceProviderScalarFieldEnum[]
  }

  /**
   * HealthInsuranceProvider findMany
   */
  export type HealthInsuranceProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * Filter, which HealthInsuranceProviders to fetch.
     */
    where?: HealthInsuranceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthInsuranceProviders to fetch.
     */
    orderBy?: HealthInsuranceProviderOrderByWithRelationInput | HealthInsuranceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthInsuranceProviders.
     */
    cursor?: HealthInsuranceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthInsuranceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthInsuranceProviders.
     */
    skip?: number
    distinct?: HealthInsuranceProviderScalarFieldEnum | HealthInsuranceProviderScalarFieldEnum[]
  }

  /**
   * HealthInsuranceProvider create
   */
  export type HealthInsuranceProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * The data needed to create a HealthInsuranceProvider.
     */
    data: XOR<HealthInsuranceProviderCreateInput, HealthInsuranceProviderUncheckedCreateInput>
  }

  /**
   * HealthInsuranceProvider createMany
   */
  export type HealthInsuranceProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthInsuranceProviders.
     */
    data: HealthInsuranceProviderCreateManyInput | HealthInsuranceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthInsuranceProvider createManyAndReturn
   */
  export type HealthInsuranceProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * The data used to create many HealthInsuranceProviders.
     */
    data: HealthInsuranceProviderCreateManyInput | HealthInsuranceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthInsuranceProvider update
   */
  export type HealthInsuranceProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * The data needed to update a HealthInsuranceProvider.
     */
    data: XOR<HealthInsuranceProviderUpdateInput, HealthInsuranceProviderUncheckedUpdateInput>
    /**
     * Choose, which HealthInsuranceProvider to update.
     */
    where: HealthInsuranceProviderWhereUniqueInput
  }

  /**
   * HealthInsuranceProvider updateMany
   */
  export type HealthInsuranceProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthInsuranceProviders.
     */
    data: XOR<HealthInsuranceProviderUpdateManyMutationInput, HealthInsuranceProviderUncheckedUpdateManyInput>
    /**
     * Filter which HealthInsuranceProviders to update
     */
    where?: HealthInsuranceProviderWhereInput
    /**
     * Limit how many HealthInsuranceProviders to update.
     */
    limit?: number
  }

  /**
   * HealthInsuranceProvider updateManyAndReturn
   */
  export type HealthInsuranceProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * The data used to update HealthInsuranceProviders.
     */
    data: XOR<HealthInsuranceProviderUpdateManyMutationInput, HealthInsuranceProviderUncheckedUpdateManyInput>
    /**
     * Filter which HealthInsuranceProviders to update
     */
    where?: HealthInsuranceProviderWhereInput
    /**
     * Limit how many HealthInsuranceProviders to update.
     */
    limit?: number
  }

  /**
   * HealthInsuranceProvider upsert
   */
  export type HealthInsuranceProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * The filter to search for the HealthInsuranceProvider to update in case it exists.
     */
    where: HealthInsuranceProviderWhereUniqueInput
    /**
     * In case the HealthInsuranceProvider found by the `where` argument doesn't exist, create a new HealthInsuranceProvider with this data.
     */
    create: XOR<HealthInsuranceProviderCreateInput, HealthInsuranceProviderUncheckedCreateInput>
    /**
     * In case the HealthInsuranceProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthInsuranceProviderUpdateInput, HealthInsuranceProviderUncheckedUpdateInput>
  }

  /**
   * HealthInsuranceProvider delete
   */
  export type HealthInsuranceProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
    /**
     * Filter which HealthInsuranceProvider to delete.
     */
    where: HealthInsuranceProviderWhereUniqueInput
  }

  /**
   * HealthInsuranceProvider deleteMany
   */
  export type HealthInsuranceProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthInsuranceProviders to delete
     */
    where?: HealthInsuranceProviderWhereInput
    /**
     * Limit how many HealthInsuranceProviders to delete.
     */
    limit?: number
  }

  /**
   * HealthInsuranceProvider without action
   */
  export type HealthInsuranceProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthInsuranceProvider
     */
    select?: HealthInsuranceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthInsuranceProvider
     */
    omit?: HealthInsuranceProviderOmit<ExtArgs> | null
  }


  /**
   * Model LegalGuardian
   */

  export type AggregateLegalGuardian = {
    _count: LegalGuardianCountAggregateOutputType | null
    _avg: LegalGuardianAvgAggregateOutputType | null
    _sum: LegalGuardianSumAggregateOutputType | null
    _min: LegalGuardianMinAggregateOutputType | null
    _max: LegalGuardianMaxAggregateOutputType | null
  }

  export type LegalGuardianAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LegalGuardianSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LegalGuardianMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    dni: string | null
    cuil: string | null
    dniProcessingNumber: string | null
    birthday: Date | null
    phone: string | null
    professionalActivity: string | null
    healthInsuranceProvider: string | null
    legalGuardianType: $Enums.LegalGuardianType | null
    legalGuardianStatus: $Enums.LegalGuardianStatus | null
    isActive: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type LegalGuardianMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    dni: string | null
    cuil: string | null
    dniProcessingNumber: string | null
    birthday: Date | null
    phone: string | null
    professionalActivity: string | null
    healthInsuranceProvider: string | null
    legalGuardianType: $Enums.LegalGuardianType | null
    legalGuardianStatus: $Enums.LegalGuardianStatus | null
    isActive: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type LegalGuardianCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    address: number
    dni: number
    cuil: number
    dniProcessingNumber: number
    birthday: number
    phone: number
    professionalActivity: number
    healthInsuranceProvider: number
    legalGuardianType: number
    legalGuardianStatus: number
    isActive: number
    createdAt: number
    userId: number
    _all: number
  }


  export type LegalGuardianAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LegalGuardianSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LegalGuardianMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    dniProcessingNumber?: true
    birthday?: true
    phone?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    legalGuardianType?: true
    legalGuardianStatus?: true
    isActive?: true
    createdAt?: true
    userId?: true
  }

  export type LegalGuardianMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    dniProcessingNumber?: true
    birthday?: true
    phone?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    legalGuardianType?: true
    legalGuardianStatus?: true
    isActive?: true
    createdAt?: true
    userId?: true
  }

  export type LegalGuardianCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    dniProcessingNumber?: true
    birthday?: true
    phone?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    legalGuardianType?: true
    legalGuardianStatus?: true
    isActive?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type LegalGuardianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalGuardian to aggregate.
     */
    where?: LegalGuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalGuardians to fetch.
     */
    orderBy?: LegalGuardianOrderByWithRelationInput | LegalGuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegalGuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalGuardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalGuardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegalGuardians
    **/
    _count?: true | LegalGuardianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegalGuardianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegalGuardianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegalGuardianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegalGuardianMaxAggregateInputType
  }

  export type GetLegalGuardianAggregateType<T extends LegalGuardianAggregateArgs> = {
        [P in keyof T & keyof AggregateLegalGuardian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegalGuardian[P]>
      : GetScalarType<T[P], AggregateLegalGuardian[P]>
  }




  export type LegalGuardianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalGuardianWhereInput
    orderBy?: LegalGuardianOrderByWithAggregationInput | LegalGuardianOrderByWithAggregationInput[]
    by: LegalGuardianScalarFieldEnum[] | LegalGuardianScalarFieldEnum
    having?: LegalGuardianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegalGuardianCountAggregateInputType | true
    _avg?: LegalGuardianAvgAggregateInputType
    _sum?: LegalGuardianSumAggregateInputType
    _min?: LegalGuardianMinAggregateInputType
    _max?: LegalGuardianMaxAggregateInputType
  }

  export type LegalGuardianGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date
    phone: string
    professionalActivity: string
    healthInsuranceProvider: string | null
    legalGuardianType: $Enums.LegalGuardianType | null
    legalGuardianStatus: $Enums.LegalGuardianStatus | null
    isActive: boolean
    createdAt: Date
    userId: number | null
    _count: LegalGuardianCountAggregateOutputType | null
    _avg: LegalGuardianAvgAggregateOutputType | null
    _sum: LegalGuardianSumAggregateOutputType | null
    _min: LegalGuardianMinAggregateOutputType | null
    _max: LegalGuardianMaxAggregateOutputType | null
  }

  type GetLegalGuardianGroupByPayload<T extends LegalGuardianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegalGuardianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegalGuardianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegalGuardianGroupByOutputType[P]>
            : GetScalarType<T[P], LegalGuardianGroupByOutputType[P]>
        }
      >
    >


  export type LegalGuardianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    dniProcessingNumber?: boolean
    birthday?: boolean
    phone?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    legalGuardianType?: boolean
    legalGuardianStatus?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | LegalGuardian$userArgs<ExtArgs>
    patients?: boolean | LegalGuardian$patientsArgs<ExtArgs>
    _count?: boolean | LegalGuardianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legalGuardian"]>

  export type LegalGuardianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    dniProcessingNumber?: boolean
    birthday?: boolean
    phone?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    legalGuardianType?: boolean
    legalGuardianStatus?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | LegalGuardian$userArgs<ExtArgs>
  }, ExtArgs["result"]["legalGuardian"]>

  export type LegalGuardianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    dniProcessingNumber?: boolean
    birthday?: boolean
    phone?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    legalGuardianType?: boolean
    legalGuardianStatus?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | LegalGuardian$userArgs<ExtArgs>
  }, ExtArgs["result"]["legalGuardian"]>

  export type LegalGuardianSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    dniProcessingNumber?: boolean
    birthday?: boolean
    phone?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    legalGuardianType?: boolean
    legalGuardianStatus?: boolean
    isActive?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type LegalGuardianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "address" | "dni" | "cuil" | "dniProcessingNumber" | "birthday" | "phone" | "professionalActivity" | "healthInsuranceProvider" | "legalGuardianType" | "legalGuardianStatus" | "isActive" | "createdAt" | "userId", ExtArgs["result"]["legalGuardian"]>
  export type LegalGuardianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LegalGuardian$userArgs<ExtArgs>
    patients?: boolean | LegalGuardian$patientsArgs<ExtArgs>
    _count?: boolean | LegalGuardianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LegalGuardianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LegalGuardian$userArgs<ExtArgs>
  }
  export type LegalGuardianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LegalGuardian$userArgs<ExtArgs>
  }

  export type $LegalGuardianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegalGuardian"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      patients: Prisma.$PatientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      address: string
      dni: string
      cuil: string
      dniProcessingNumber: string
      birthday: Date
      phone: string
      professionalActivity: string
      healthInsuranceProvider: string | null
      legalGuardianType: $Enums.LegalGuardianType | null
      legalGuardianStatus: $Enums.LegalGuardianStatus | null
      isActive: boolean
      createdAt: Date
      userId: number | null
    }, ExtArgs["result"]["legalGuardian"]>
    composites: {}
  }

  type LegalGuardianGetPayload<S extends boolean | null | undefined | LegalGuardianDefaultArgs> = $Result.GetResult<Prisma.$LegalGuardianPayload, S>

  type LegalGuardianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegalGuardianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegalGuardianCountAggregateInputType | true
    }

  export interface LegalGuardianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegalGuardian'], meta: { name: 'LegalGuardian' } }
    /**
     * Find zero or one LegalGuardian that matches the filter.
     * @param {LegalGuardianFindUniqueArgs} args - Arguments to find a LegalGuardian
     * @example
     * // Get one LegalGuardian
     * const legalGuardian = await prisma.legalGuardian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegalGuardianFindUniqueArgs>(args: SelectSubset<T, LegalGuardianFindUniqueArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LegalGuardian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegalGuardianFindUniqueOrThrowArgs} args - Arguments to find a LegalGuardian
     * @example
     * // Get one LegalGuardian
     * const legalGuardian = await prisma.legalGuardian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegalGuardianFindUniqueOrThrowArgs>(args: SelectSubset<T, LegalGuardianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegalGuardian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalGuardianFindFirstArgs} args - Arguments to find a LegalGuardian
     * @example
     * // Get one LegalGuardian
     * const legalGuardian = await prisma.legalGuardian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegalGuardianFindFirstArgs>(args?: SelectSubset<T, LegalGuardianFindFirstArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LegalGuardian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalGuardianFindFirstOrThrowArgs} args - Arguments to find a LegalGuardian
     * @example
     * // Get one LegalGuardian
     * const legalGuardian = await prisma.legalGuardian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegalGuardianFindFirstOrThrowArgs>(args?: SelectSubset<T, LegalGuardianFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LegalGuardians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalGuardianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegalGuardians
     * const legalGuardians = await prisma.legalGuardian.findMany()
     * 
     * // Get first 10 LegalGuardians
     * const legalGuardians = await prisma.legalGuardian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legalGuardianWithIdOnly = await prisma.legalGuardian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegalGuardianFindManyArgs>(args?: SelectSubset<T, LegalGuardianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LegalGuardian.
     * @param {LegalGuardianCreateArgs} args - Arguments to create a LegalGuardian.
     * @example
     * // Create one LegalGuardian
     * const LegalGuardian = await prisma.legalGuardian.create({
     *   data: {
     *     // ... data to create a LegalGuardian
     *   }
     * })
     * 
     */
    create<T extends LegalGuardianCreateArgs>(args: SelectSubset<T, LegalGuardianCreateArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LegalGuardians.
     * @param {LegalGuardianCreateManyArgs} args - Arguments to create many LegalGuardians.
     * @example
     * // Create many LegalGuardians
     * const legalGuardian = await prisma.legalGuardian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegalGuardianCreateManyArgs>(args?: SelectSubset<T, LegalGuardianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LegalGuardians and returns the data saved in the database.
     * @param {LegalGuardianCreateManyAndReturnArgs} args - Arguments to create many LegalGuardians.
     * @example
     * // Create many LegalGuardians
     * const legalGuardian = await prisma.legalGuardian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LegalGuardians and only return the `id`
     * const legalGuardianWithIdOnly = await prisma.legalGuardian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegalGuardianCreateManyAndReturnArgs>(args?: SelectSubset<T, LegalGuardianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LegalGuardian.
     * @param {LegalGuardianDeleteArgs} args - Arguments to delete one LegalGuardian.
     * @example
     * // Delete one LegalGuardian
     * const LegalGuardian = await prisma.legalGuardian.delete({
     *   where: {
     *     // ... filter to delete one LegalGuardian
     *   }
     * })
     * 
     */
    delete<T extends LegalGuardianDeleteArgs>(args: SelectSubset<T, LegalGuardianDeleteArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LegalGuardian.
     * @param {LegalGuardianUpdateArgs} args - Arguments to update one LegalGuardian.
     * @example
     * // Update one LegalGuardian
     * const legalGuardian = await prisma.legalGuardian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegalGuardianUpdateArgs>(args: SelectSubset<T, LegalGuardianUpdateArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LegalGuardians.
     * @param {LegalGuardianDeleteManyArgs} args - Arguments to filter LegalGuardians to delete.
     * @example
     * // Delete a few LegalGuardians
     * const { count } = await prisma.legalGuardian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegalGuardianDeleteManyArgs>(args?: SelectSubset<T, LegalGuardianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalGuardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalGuardianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegalGuardians
     * const legalGuardian = await prisma.legalGuardian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegalGuardianUpdateManyArgs>(args: SelectSubset<T, LegalGuardianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalGuardians and returns the data updated in the database.
     * @param {LegalGuardianUpdateManyAndReturnArgs} args - Arguments to update many LegalGuardians.
     * @example
     * // Update many LegalGuardians
     * const legalGuardian = await prisma.legalGuardian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LegalGuardians and only return the `id`
     * const legalGuardianWithIdOnly = await prisma.legalGuardian.updateManyAndReturn({
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
    updateManyAndReturn<T extends LegalGuardianUpdateManyAndReturnArgs>(args: SelectSubset<T, LegalGuardianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LegalGuardian.
     * @param {LegalGuardianUpsertArgs} args - Arguments to update or create a LegalGuardian.
     * @example
     * // Update or create a LegalGuardian
     * const legalGuardian = await prisma.legalGuardian.upsert({
     *   create: {
     *     // ... data to create a LegalGuardian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegalGuardian we want to update
     *   }
     * })
     */
    upsert<T extends LegalGuardianUpsertArgs>(args: SelectSubset<T, LegalGuardianUpsertArgs<ExtArgs>>): Prisma__LegalGuardianClient<$Result.GetResult<Prisma.$LegalGuardianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LegalGuardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalGuardianCountArgs} args - Arguments to filter LegalGuardians to count.
     * @example
     * // Count the number of LegalGuardians
     * const count = await prisma.legalGuardian.count({
     *   where: {
     *     // ... the filter for the LegalGuardians we want to count
     *   }
     * })
    **/
    count<T extends LegalGuardianCountArgs>(
      args?: Subset<T, LegalGuardianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegalGuardianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegalGuardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalGuardianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegalGuardianAggregateArgs>(args: Subset<T, LegalGuardianAggregateArgs>): Prisma.PrismaPromise<GetLegalGuardianAggregateType<T>>

    /**
     * Group by LegalGuardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalGuardianGroupByArgs} args - Group by arguments.
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
      T extends LegalGuardianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegalGuardianGroupByArgs['orderBy'] }
        : { orderBy?: LegalGuardianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegalGuardianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalGuardianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegalGuardian model
   */
  readonly fields: LegalGuardianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegalGuardian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegalGuardianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends LegalGuardian$userArgs<ExtArgs> = {}>(args?: Subset<T, LegalGuardian$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patients<T extends LegalGuardian$patientsArgs<ExtArgs> = {}>(args?: Subset<T, LegalGuardian$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LegalGuardian model
   */
  interface LegalGuardianFieldRefs {
    readonly id: FieldRef<"LegalGuardian", 'Int'>
    readonly firstName: FieldRef<"LegalGuardian", 'String'>
    readonly lastName: FieldRef<"LegalGuardian", 'String'>
    readonly address: FieldRef<"LegalGuardian", 'String'>
    readonly dni: FieldRef<"LegalGuardian", 'String'>
    readonly cuil: FieldRef<"LegalGuardian", 'String'>
    readonly dniProcessingNumber: FieldRef<"LegalGuardian", 'String'>
    readonly birthday: FieldRef<"LegalGuardian", 'DateTime'>
    readonly phone: FieldRef<"LegalGuardian", 'String'>
    readonly professionalActivity: FieldRef<"LegalGuardian", 'String'>
    readonly healthInsuranceProvider: FieldRef<"LegalGuardian", 'String'>
    readonly legalGuardianType: FieldRef<"LegalGuardian", 'LegalGuardianType'>
    readonly legalGuardianStatus: FieldRef<"LegalGuardian", 'LegalGuardianStatus'>
    readonly isActive: FieldRef<"LegalGuardian", 'Boolean'>
    readonly createdAt: FieldRef<"LegalGuardian", 'DateTime'>
    readonly userId: FieldRef<"LegalGuardian", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LegalGuardian findUnique
   */
  export type LegalGuardianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * Filter, which LegalGuardian to fetch.
     */
    where: LegalGuardianWhereUniqueInput
  }

  /**
   * LegalGuardian findUniqueOrThrow
   */
  export type LegalGuardianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * Filter, which LegalGuardian to fetch.
     */
    where: LegalGuardianWhereUniqueInput
  }

  /**
   * LegalGuardian findFirst
   */
  export type LegalGuardianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * Filter, which LegalGuardian to fetch.
     */
    where?: LegalGuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalGuardians to fetch.
     */
    orderBy?: LegalGuardianOrderByWithRelationInput | LegalGuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalGuardians.
     */
    cursor?: LegalGuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalGuardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalGuardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalGuardians.
     */
    distinct?: LegalGuardianScalarFieldEnum | LegalGuardianScalarFieldEnum[]
  }

  /**
   * LegalGuardian findFirstOrThrow
   */
  export type LegalGuardianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * Filter, which LegalGuardian to fetch.
     */
    where?: LegalGuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalGuardians to fetch.
     */
    orderBy?: LegalGuardianOrderByWithRelationInput | LegalGuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalGuardians.
     */
    cursor?: LegalGuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalGuardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalGuardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalGuardians.
     */
    distinct?: LegalGuardianScalarFieldEnum | LegalGuardianScalarFieldEnum[]
  }

  /**
   * LegalGuardian findMany
   */
  export type LegalGuardianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * Filter, which LegalGuardians to fetch.
     */
    where?: LegalGuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalGuardians to fetch.
     */
    orderBy?: LegalGuardianOrderByWithRelationInput | LegalGuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegalGuardians.
     */
    cursor?: LegalGuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalGuardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalGuardians.
     */
    skip?: number
    distinct?: LegalGuardianScalarFieldEnum | LegalGuardianScalarFieldEnum[]
  }

  /**
   * LegalGuardian create
   */
  export type LegalGuardianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * The data needed to create a LegalGuardian.
     */
    data: XOR<LegalGuardianCreateInput, LegalGuardianUncheckedCreateInput>
  }

  /**
   * LegalGuardian createMany
   */
  export type LegalGuardianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegalGuardians.
     */
    data: LegalGuardianCreateManyInput | LegalGuardianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LegalGuardian createManyAndReturn
   */
  export type LegalGuardianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * The data used to create many LegalGuardians.
     */
    data: LegalGuardianCreateManyInput | LegalGuardianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegalGuardian update
   */
  export type LegalGuardianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * The data needed to update a LegalGuardian.
     */
    data: XOR<LegalGuardianUpdateInput, LegalGuardianUncheckedUpdateInput>
    /**
     * Choose, which LegalGuardian to update.
     */
    where: LegalGuardianWhereUniqueInput
  }

  /**
   * LegalGuardian updateMany
   */
  export type LegalGuardianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegalGuardians.
     */
    data: XOR<LegalGuardianUpdateManyMutationInput, LegalGuardianUncheckedUpdateManyInput>
    /**
     * Filter which LegalGuardians to update
     */
    where?: LegalGuardianWhereInput
    /**
     * Limit how many LegalGuardians to update.
     */
    limit?: number
  }

  /**
   * LegalGuardian updateManyAndReturn
   */
  export type LegalGuardianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * The data used to update LegalGuardians.
     */
    data: XOR<LegalGuardianUpdateManyMutationInput, LegalGuardianUncheckedUpdateManyInput>
    /**
     * Filter which LegalGuardians to update
     */
    where?: LegalGuardianWhereInput
    /**
     * Limit how many LegalGuardians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LegalGuardian upsert
   */
  export type LegalGuardianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * The filter to search for the LegalGuardian to update in case it exists.
     */
    where: LegalGuardianWhereUniqueInput
    /**
     * In case the LegalGuardian found by the `where` argument doesn't exist, create a new LegalGuardian with this data.
     */
    create: XOR<LegalGuardianCreateInput, LegalGuardianUncheckedCreateInput>
    /**
     * In case the LegalGuardian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegalGuardianUpdateInput, LegalGuardianUncheckedUpdateInput>
  }

  /**
   * LegalGuardian delete
   */
  export type LegalGuardianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
    /**
     * Filter which LegalGuardian to delete.
     */
    where: LegalGuardianWhereUniqueInput
  }

  /**
   * LegalGuardian deleteMany
   */
  export type LegalGuardianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalGuardians to delete
     */
    where?: LegalGuardianWhereInput
    /**
     * Limit how many LegalGuardians to delete.
     */
    limit?: number
  }

  /**
   * LegalGuardian.user
   */
  export type LegalGuardian$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LegalGuardian.patients
   */
  export type LegalGuardian$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * LegalGuardian without action
   */
  export type LegalGuardianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalGuardian
     */
    select?: LegalGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LegalGuardian
     */
    omit?: LegalGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegalGuardianInclude<ExtArgs> | null
  }


  /**
   * Model Professional
   */

  export type AggregateProfessional = {
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  export type ProfessionalAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfessionalSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfessionalMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    dni: string | null
    cuil: string | null
    birthday: Date | null
    phone: string | null
    professionalActivity: string | null
    healthInsuranceProvider: string | null
    isActive: boolean | null
    profecionalType: string | null
    userId: number | null
  }

  export type ProfessionalMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    address: string | null
    dni: string | null
    cuil: string | null
    birthday: Date | null
    phone: string | null
    professionalActivity: string | null
    healthInsuranceProvider: string | null
    isActive: boolean | null
    profecionalType: string | null
    userId: number | null
  }

  export type ProfessionalCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    address: number
    dni: number
    cuil: number
    birthday: number
    phone: number
    professionalActivity: number
    healthInsuranceProvider: number
    isActive: number
    profecionalType: number
    userId: number
    _all: number
  }


  export type ProfessionalAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfessionalSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfessionalMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    birthday?: true
    phone?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    isActive?: true
    profecionalType?: true
    userId?: true
  }

  export type ProfessionalMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    birthday?: true
    phone?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    isActive?: true
    profecionalType?: true
    userId?: true
  }

  export type ProfessionalCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    address?: true
    dni?: true
    cuil?: true
    birthday?: true
    phone?: true
    professionalActivity?: true
    healthInsuranceProvider?: true
    isActive?: true
    profecionalType?: true
    userId?: true
    _all?: true
  }

  export type ProfessionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professional to aggregate.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professionals
    **/
    _count?: true | ProfessionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalMaxAggregateInputType
  }

  export type GetProfessionalAggregateType<T extends ProfessionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessional[P]>
      : GetScalarType<T[P], AggregateProfessional[P]>
  }




  export type ProfessionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithAggregationInput | ProfessionalOrderByWithAggregationInput[]
    by: ProfessionalScalarFieldEnum[] | ProfessionalScalarFieldEnum
    having?: ProfessionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalCountAggregateInputType | true
    _avg?: ProfessionalAvgAggregateInputType
    _sum?: ProfessionalSumAggregateInputType
    _min?: ProfessionalMinAggregateInputType
    _max?: ProfessionalMaxAggregateInputType
  }

  export type ProfessionalGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date
    phone: string
    professionalActivity: string
    healthInsuranceProvider: string | null
    isActive: boolean
    profecionalType: string
    userId: number | null
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  type GetProfessionalGroupByPayload<T extends ProfessionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    birthday?: boolean
    phone?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    isActive?: boolean
    profecionalType?: boolean
    userId?: boolean
    user?: boolean | Professional$userArgs<ExtArgs>
    events?: boolean | Professional$eventsArgs<ExtArgs>
    schedules?: boolean | Professional$schedulesArgs<ExtArgs>
    _count?: boolean | ProfessionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    birthday?: boolean
    phone?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    isActive?: boolean
    profecionalType?: boolean
    userId?: boolean
    user?: boolean | Professional$userArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    birthday?: boolean
    phone?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    isActive?: boolean
    profecionalType?: boolean
    userId?: boolean
    user?: boolean | Professional$userArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    address?: boolean
    dni?: boolean
    cuil?: boolean
    birthday?: boolean
    phone?: boolean
    professionalActivity?: boolean
    healthInsuranceProvider?: boolean
    isActive?: boolean
    profecionalType?: boolean
    userId?: boolean
  }

  export type ProfessionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "address" | "dni" | "cuil" | "birthday" | "phone" | "professionalActivity" | "healthInsuranceProvider" | "isActive" | "profecionalType" | "userId", ExtArgs["result"]["professional"]>
  export type ProfessionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Professional$userArgs<ExtArgs>
    events?: boolean | Professional$eventsArgs<ExtArgs>
    schedules?: boolean | Professional$schedulesArgs<ExtArgs>
    _count?: boolean | ProfessionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Professional$userArgs<ExtArgs>
  }
  export type ProfessionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Professional$userArgs<ExtArgs>
  }

  export type $ProfessionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professional"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      events: Prisma.$EventPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      address: string
      dni: string
      cuil: string
      birthday: Date
      phone: string
      professionalActivity: string
      healthInsuranceProvider: string | null
      isActive: boolean
      profecionalType: string
      userId: number | null
    }, ExtArgs["result"]["professional"]>
    composites: {}
  }

  type ProfessionalGetPayload<S extends boolean | null | undefined | ProfessionalDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalPayload, S>

  type ProfessionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalCountAggregateInputType | true
    }

  export interface ProfessionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professional'], meta: { name: 'Professional' } }
    /**
     * Find zero or one Professional that matches the filter.
     * @param {ProfessionalFindUniqueArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalFindUniqueArgs>(args: SelectSubset<T, ProfessionalFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalFindUniqueOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalFindFirstArgs>(args?: SelectSubset<T, ProfessionalFindFirstArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professionals
     * const professionals = await prisma.professional.findMany()
     * 
     * // Get first 10 Professionals
     * const professionals = await prisma.professional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalWithIdOnly = await prisma.professional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalFindManyArgs>(args?: SelectSubset<T, ProfessionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professional.
     * @param {ProfessionalCreateArgs} args - Arguments to create a Professional.
     * @example
     * // Create one Professional
     * const Professional = await prisma.professional.create({
     *   data: {
     *     // ... data to create a Professional
     *   }
     * })
     * 
     */
    create<T extends ProfessionalCreateArgs>(args: SelectSubset<T, ProfessionalCreateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professionals.
     * @param {ProfessionalCreateManyArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalCreateManyArgs>(args?: SelectSubset<T, ProfessionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professionals and returns the data saved in the database.
     * @param {ProfessionalCreateManyAndReturnArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professionals and only return the `id`
     * const professionalWithIdOnly = await prisma.professional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professional.
     * @param {ProfessionalDeleteArgs} args - Arguments to delete one Professional.
     * @example
     * // Delete one Professional
     * const Professional = await prisma.professional.delete({
     *   where: {
     *     // ... filter to delete one Professional
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalDeleteArgs>(args: SelectSubset<T, ProfessionalDeleteArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professional.
     * @param {ProfessionalUpdateArgs} args - Arguments to update one Professional.
     * @example
     * // Update one Professional
     * const professional = await prisma.professional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalUpdateArgs>(args: SelectSubset<T, ProfessionalUpdateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professionals.
     * @param {ProfessionalDeleteManyArgs} args - Arguments to filter Professionals to delete.
     * @example
     * // Delete a few Professionals
     * const { count } = await prisma.professional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalDeleteManyArgs>(args?: SelectSubset<T, ProfessionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalUpdateManyArgs>(args: SelectSubset<T, ProfessionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals and returns the data updated in the database.
     * @param {ProfessionalUpdateManyAndReturnArgs} args - Arguments to update many Professionals.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professionals and only return the `id`
     * const professionalWithIdOnly = await prisma.professional.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professional.
     * @param {ProfessionalUpsertArgs} args - Arguments to update or create a Professional.
     * @example
     * // Update or create a Professional
     * const professional = await prisma.professional.upsert({
     *   create: {
     *     // ... data to create a Professional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professional we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalUpsertArgs>(args: SelectSubset<T, ProfessionalUpsertArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalCountArgs} args - Arguments to filter Professionals to count.
     * @example
     * // Count the number of Professionals
     * const count = await prisma.professional.count({
     *   where: {
     *     // ... the filter for the Professionals we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalCountArgs>(
      args?: Subset<T, ProfessionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalAggregateArgs>(args: Subset<T, ProfessionalAggregateArgs>): Prisma.PrismaPromise<GetProfessionalAggregateType<T>>

    /**
     * Group by Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professional model
   */
  readonly fields: ProfessionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Professional$userArgs<ExtArgs> = {}>(args?: Subset<T, Professional$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events<T extends Professional$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Professional$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Professional$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Professional$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Professional model
   */
  interface ProfessionalFieldRefs {
    readonly id: FieldRef<"Professional", 'Int'>
    readonly firstName: FieldRef<"Professional", 'String'>
    readonly lastName: FieldRef<"Professional", 'String'>
    readonly address: FieldRef<"Professional", 'String'>
    readonly dni: FieldRef<"Professional", 'String'>
    readonly cuil: FieldRef<"Professional", 'String'>
    readonly birthday: FieldRef<"Professional", 'DateTime'>
    readonly phone: FieldRef<"Professional", 'String'>
    readonly professionalActivity: FieldRef<"Professional", 'String'>
    readonly healthInsuranceProvider: FieldRef<"Professional", 'String'>
    readonly isActive: FieldRef<"Professional", 'Boolean'>
    readonly profecionalType: FieldRef<"Professional", 'String'>
    readonly userId: FieldRef<"Professional", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Professional findUnique
   */
  export type ProfessionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findUniqueOrThrow
   */
  export type ProfessionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findFirst
   */
  export type ProfessionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findFirstOrThrow
   */
  export type ProfessionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findMany
   */
  export type ProfessionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professionals to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional create
   */
  export type ProfessionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Professional.
     */
    data: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
  }

  /**
   * Professional createMany
   */
  export type ProfessionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professional createManyAndReturn
   */
  export type ProfessionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional update
   */
  export type ProfessionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Professional.
     */
    data: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
    /**
     * Choose, which Professional to update.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional updateMany
   */
  export type ProfessionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
  }

  /**
   * Professional updateManyAndReturn
   */
  export type ProfessionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional upsert
   */
  export type ProfessionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Professional to update in case it exists.
     */
    where: ProfessionalWhereUniqueInput
    /**
     * In case the Professional found by the `where` argument doesn't exist, create a new Professional with this data.
     */
    create: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
    /**
     * In case the Professional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
  }

  /**
   * Professional delete
   */
  export type ProfessionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter which Professional to delete.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional deleteMany
   */
  export type ProfessionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professionals to delete
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to delete.
     */
    limit?: number
  }

  /**
   * Professional.user
   */
  export type Professional$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Professional.events
   */
  export type Professional$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Professional.schedules
   */
  export type Professional$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Professional without action
   */
  export type ProfessionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
  }


  /**
   * Model Admission
   */

  export type AggregateAdmission = {
    _count: AdmissionCountAggregateOutputType | null
    _avg: AdmissionAvgAggregateOutputType | null
    _sum: AdmissionSumAggregateOutputType | null
    _min: AdmissionMinAggregateOutputType | null
    _max: AdmissionMaxAggregateOutputType | null
  }

  export type AdmissionAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type AdmissionSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type AdmissionMinAggregateOutputType = {
    id: number | null
    admissionStatus: $Enums.AdmissionStatus | null
    patientId: number | null
  }

  export type AdmissionMaxAggregateOutputType = {
    id: number | null
    admissionStatus: $Enums.AdmissionStatus | null
    patientId: number | null
  }

  export type AdmissionCountAggregateOutputType = {
    id: number
    admissionStatus: number
    patientId: number
    _all: number
  }


  export type AdmissionAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type AdmissionSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type AdmissionMinAggregateInputType = {
    id?: true
    admissionStatus?: true
    patientId?: true
  }

  export type AdmissionMaxAggregateInputType = {
    id?: true
    admissionStatus?: true
    patientId?: true
  }

  export type AdmissionCountAggregateInputType = {
    id?: true
    admissionStatus?: true
    patientId?: true
    _all?: true
  }

  export type AdmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admission to aggregate.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admissions
    **/
    _count?: true | AdmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionMaxAggregateInputType
  }

  export type GetAdmissionAggregateType<T extends AdmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmission[P]>
      : GetScalarType<T[P], AggregateAdmission[P]>
  }




  export type AdmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithAggregationInput | AdmissionOrderByWithAggregationInput[]
    by: AdmissionScalarFieldEnum[] | AdmissionScalarFieldEnum
    having?: AdmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionCountAggregateInputType | true
    _avg?: AdmissionAvgAggregateInputType
    _sum?: AdmissionSumAggregateInputType
    _min?: AdmissionMinAggregateInputType
    _max?: AdmissionMaxAggregateInputType
  }

  export type AdmissionGroupByOutputType = {
    id: number
    admissionStatus: $Enums.AdmissionStatus | null
    patientId: number
    _count: AdmissionCountAggregateOutputType | null
    _avg: AdmissionAvgAggregateOutputType | null
    _sum: AdmissionSumAggregateOutputType | null
    _min: AdmissionMinAggregateOutputType | null
    _max: AdmissionMaxAggregateOutputType | null
  }

  type GetAdmissionGroupByPayload<T extends AdmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionStatus?: boolean
    patientId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>

  export type AdmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionStatus?: boolean
    patientId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>

  export type AdmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionStatus?: boolean
    patientId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>

  export type AdmissionSelectScalar = {
    id?: boolean
    admissionStatus?: boolean
    patientId?: boolean
  }

  export type AdmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admissionStatus" | "patientId", ExtArgs["result"]["admission"]>
  export type AdmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type AdmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type AdmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $AdmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admission"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      admissionStatus: $Enums.AdmissionStatus | null
      patientId: number
    }, ExtArgs["result"]["admission"]>
    composites: {}
  }

  type AdmissionGetPayload<S extends boolean | null | undefined | AdmissionDefaultArgs> = $Result.GetResult<Prisma.$AdmissionPayload, S>

  type AdmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmissionCountAggregateInputType | true
    }

  export interface AdmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admission'], meta: { name: 'Admission' } }
    /**
     * Find zero or one Admission that matches the filter.
     * @param {AdmissionFindUniqueArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionFindUniqueArgs>(args: SelectSubset<T, AdmissionFindUniqueArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmissionFindUniqueOrThrowArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindFirstArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionFindFirstArgs>(args?: SelectSubset<T, AdmissionFindFirstArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindFirstOrThrowArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admissions
     * const admissions = await prisma.admission.findMany()
     * 
     * // Get first 10 Admissions
     * const admissions = await prisma.admission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionWithIdOnly = await prisma.admission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionFindManyArgs>(args?: SelectSubset<T, AdmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admission.
     * @param {AdmissionCreateArgs} args - Arguments to create a Admission.
     * @example
     * // Create one Admission
     * const Admission = await prisma.admission.create({
     *   data: {
     *     // ... data to create a Admission
     *   }
     * })
     * 
     */
    create<T extends AdmissionCreateArgs>(args: SelectSubset<T, AdmissionCreateArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admissions.
     * @param {AdmissionCreateManyArgs} args - Arguments to create many Admissions.
     * @example
     * // Create many Admissions
     * const admission = await prisma.admission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionCreateManyArgs>(args?: SelectSubset<T, AdmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admissions and returns the data saved in the database.
     * @param {AdmissionCreateManyAndReturnArgs} args - Arguments to create many Admissions.
     * @example
     * // Create many Admissions
     * const admission = await prisma.admission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admissions and only return the `id`
     * const admissionWithIdOnly = await prisma.admission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admission.
     * @param {AdmissionDeleteArgs} args - Arguments to delete one Admission.
     * @example
     * // Delete one Admission
     * const Admission = await prisma.admission.delete({
     *   where: {
     *     // ... filter to delete one Admission
     *   }
     * })
     * 
     */
    delete<T extends AdmissionDeleteArgs>(args: SelectSubset<T, AdmissionDeleteArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admission.
     * @param {AdmissionUpdateArgs} args - Arguments to update one Admission.
     * @example
     * // Update one Admission
     * const admission = await prisma.admission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionUpdateArgs>(args: SelectSubset<T, AdmissionUpdateArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admissions.
     * @param {AdmissionDeleteManyArgs} args - Arguments to filter Admissions to delete.
     * @example
     * // Delete a few Admissions
     * const { count } = await prisma.admission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionDeleteManyArgs>(args?: SelectSubset<T, AdmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admissions
     * const admission = await prisma.admission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionUpdateManyArgs>(args: SelectSubset<T, AdmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admissions and returns the data updated in the database.
     * @param {AdmissionUpdateManyAndReturnArgs} args - Arguments to update many Admissions.
     * @example
     * // Update many Admissions
     * const admission = await prisma.admission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admissions and only return the `id`
     * const admissionWithIdOnly = await prisma.admission.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, AdmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admission.
     * @param {AdmissionUpsertArgs} args - Arguments to update or create a Admission.
     * @example
     * // Update or create a Admission
     * const admission = await prisma.admission.upsert({
     *   create: {
     *     // ... data to create a Admission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admission we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionUpsertArgs>(args: SelectSubset<T, AdmissionUpsertArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCountArgs} args - Arguments to filter Admissions to count.
     * @example
     * // Count the number of Admissions
     * const count = await prisma.admission.count({
     *   where: {
     *     // ... the filter for the Admissions we want to count
     *   }
     * })
    **/
    count<T extends AdmissionCountArgs>(
      args?: Subset<T, AdmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdmissionAggregateArgs>(args: Subset<T, AdmissionAggregateArgs>): Prisma.PrismaPromise<GetAdmissionAggregateType<T>>

    /**
     * Group by Admission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionGroupByArgs} args - Group by arguments.
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
      T extends AdmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admission model
   */
  readonly fields: AdmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admission model
   */
  interface AdmissionFieldRefs {
    readonly id: FieldRef<"Admission", 'Int'>
    readonly admissionStatus: FieldRef<"Admission", 'AdmissionStatus'>
    readonly patientId: FieldRef<"Admission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admission findUnique
   */
  export type AdmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission findUniqueOrThrow
   */
  export type AdmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission findFirst
   */
  export type AdmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission findFirstOrThrow
   */
  export type AdmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission findMany
   */
  export type AdmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission create
   */
  export type AdmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Admission.
     */
    data: XOR<AdmissionCreateInput, AdmissionUncheckedCreateInput>
  }

  /**
   * Admission createMany
   */
  export type AdmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admissions.
     */
    data: AdmissionCreateManyInput | AdmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admission createManyAndReturn
   */
  export type AdmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Admissions.
     */
    data: AdmissionCreateManyInput | AdmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admission update
   */
  export type AdmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Admission.
     */
    data: XOR<AdmissionUpdateInput, AdmissionUncheckedUpdateInput>
    /**
     * Choose, which Admission to update.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission updateMany
   */
  export type AdmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admissions.
     */
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyInput>
    /**
     * Filter which Admissions to update
     */
    where?: AdmissionWhereInput
    /**
     * Limit how many Admissions to update.
     */
    limit?: number
  }

  /**
   * Admission updateManyAndReturn
   */
  export type AdmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * The data used to update Admissions.
     */
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyInput>
    /**
     * Filter which Admissions to update
     */
    where?: AdmissionWhereInput
    /**
     * Limit how many Admissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admission upsert
   */
  export type AdmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Admission to update in case it exists.
     */
    where: AdmissionWhereUniqueInput
    /**
     * In case the Admission found by the `where` argument doesn't exist, create a new Admission with this data.
     */
    create: XOR<AdmissionCreateInput, AdmissionUncheckedCreateInput>
    /**
     * In case the Admission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionUpdateInput, AdmissionUncheckedUpdateInput>
  }

  /**
   * Admission delete
   */
  export type AdmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter which Admission to delete.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission deleteMany
   */
  export type AdmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admissions to delete
     */
    where?: AdmissionWhereInput
    /**
     * Limit how many Admissions to delete.
     */
    limit?: number
  }

  /**
   * Admission without action
   */
  export type AdmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    professionalId: number | null
    patientId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    professionalId: number | null
    patientId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startEvent: Date | null
    endEvent: Date | null
    eventType: $Enums.EventType | null
    createdAt: Date | null
    status: $Enums.EventStatus | null
    createdById: number | null
    professionalId: number | null
    patientId: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startEvent: Date | null
    endEvent: Date | null
    eventType: $Enums.EventType | null
    createdAt: Date | null
    status: $Enums.EventStatus | null
    createdById: number | null
    professionalId: number | null
    patientId: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startEvent: number
    endEvent: number
    eventType: number
    createdAt: number
    status: number
    createdById: number
    professionalId: number
    patientId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    createdById?: true
    professionalId?: true
    patientId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    createdById?: true
    professionalId?: true
    patientId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startEvent?: true
    endEvent?: true
    eventType?: true
    createdAt?: true
    status?: true
    createdById?: true
    professionalId?: true
    patientId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startEvent?: true
    endEvent?: true
    eventType?: true
    createdAt?: true
    status?: true
    createdById?: true
    professionalId?: true
    patientId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startEvent?: true
    endEvent?: true
    eventType?: true
    createdAt?: true
    status?: true
    createdById?: true
    professionalId?: true
    patientId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    description: string | null
    startEvent: Date
    endEvent: Date
    eventType: $Enums.EventType
    createdAt: Date
    status: $Enums.EventStatus
    createdById: number
    professionalId: number
    patientId: number | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startEvent?: boolean
    endEvent?: boolean
    eventType?: boolean
    createdAt?: boolean
    status?: boolean
    createdById?: boolean
    professionalId?: boolean
    patientId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    patient?: boolean | Event$patientArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startEvent?: boolean
    endEvent?: boolean
    eventType?: boolean
    createdAt?: boolean
    status?: boolean
    createdById?: boolean
    professionalId?: boolean
    patientId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    patient?: boolean | Event$patientArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startEvent?: boolean
    endEvent?: boolean
    eventType?: boolean
    createdAt?: boolean
    status?: boolean
    createdById?: boolean
    professionalId?: boolean
    patientId?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    patient?: boolean | Event$patientArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startEvent?: boolean
    endEvent?: boolean
    eventType?: boolean
    createdAt?: boolean
    status?: boolean
    createdById?: boolean
    professionalId?: boolean
    patientId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startEvent" | "endEvent" | "eventType" | "createdAt" | "status" | "createdById" | "professionalId" | "patientId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    patient?: boolean | Event$patientArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    patient?: boolean | Event$patientArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    patient?: boolean | Event$patientArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      professional: Prisma.$ProfessionalPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      startEvent: Date
      endEvent: Date
      eventType: $Enums.EventType
      createdAt: Date
      status: $Enums.EventStatus
      createdById: number
      professionalId: number
      patientId: number | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professional<T extends ProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalDefaultArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends Event$patientArgs<ExtArgs> = {}>(args?: Subset<T, Event$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startEvent: FieldRef<"Event", 'DateTime'>
    readonly endEvent: FieldRef<"Event", 'DateTime'>
    readonly eventType: FieldRef<"Event", 'EventType'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly createdById: FieldRef<"Event", 'Int'>
    readonly professionalId: FieldRef<"Event", 'Int'>
    readonly patientId: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.patient
   */
  export type Event$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Process
   */

  export type AggregateProcess = {
    _count: ProcessCountAggregateOutputType | null
    _avg: ProcessAvgAggregateOutputType | null
    _sum: ProcessSumAggregateOutputType | null
    _min: ProcessMinAggregateOutputType | null
    _max: ProcessMaxAggregateOutputType | null
  }

  export type ProcessAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ProcessSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ProcessMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    processType: $Enums.ProcessType | null
    processStatus: $Enums.ProcessStatus | null
    createdAt: Date | null
    createdById: number | null
  }

  export type ProcessMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    processType: $Enums.ProcessType | null
    processStatus: $Enums.ProcessStatus | null
    createdAt: Date | null
    createdById: number | null
  }

  export type ProcessCountAggregateOutputType = {
    id: number
    title: number
    description: number
    processType: number
    processStatus: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type ProcessAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ProcessSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ProcessMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    processType?: true
    processStatus?: true
    createdAt?: true
    createdById?: true
  }

  export type ProcessMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    processType?: true
    processStatus?: true
    createdAt?: true
    createdById?: true
  }

  export type ProcessCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    processType?: true
    processStatus?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type ProcessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Process to aggregate.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Processes
    **/
    _count?: true | ProcessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessMaxAggregateInputType
  }

  export type GetProcessAggregateType<T extends ProcessAggregateArgs> = {
        [P in keyof T & keyof AggregateProcess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcess[P]>
      : GetScalarType<T[P], AggregateProcess[P]>
  }




  export type ProcessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessWhereInput
    orderBy?: ProcessOrderByWithAggregationInput | ProcessOrderByWithAggregationInput[]
    by: ProcessScalarFieldEnum[] | ProcessScalarFieldEnum
    having?: ProcessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessCountAggregateInputType | true
    _avg?: ProcessAvgAggregateInputType
    _sum?: ProcessSumAggregateInputType
    _min?: ProcessMinAggregateInputType
    _max?: ProcessMaxAggregateInputType
  }

  export type ProcessGroupByOutputType = {
    id: number
    title: string
    description: string | null
    processType: $Enums.ProcessType
    processStatus: $Enums.ProcessStatus
    createdAt: Date
    createdById: number
    _count: ProcessCountAggregateOutputType | null
    _avg: ProcessAvgAggregateOutputType | null
    _sum: ProcessSumAggregateOutputType | null
    _min: ProcessMinAggregateOutputType | null
    _max: ProcessMaxAggregateOutputType | null
  }

  type GetProcessGroupByPayload<T extends ProcessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessGroupByOutputType[P]>
        }
      >
    >


  export type ProcessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    processType?: boolean
    processStatus?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    processType?: boolean
    processStatus?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    processType?: boolean
    processStatus?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    processType?: boolean
    processStatus?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type ProcessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "processType" | "processStatus" | "createdAt" | "createdById", ExtArgs["result"]["process"]>
  export type ProcessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProcessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProcessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProcessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Process"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      processType: $Enums.ProcessType
      processStatus: $Enums.ProcessStatus
      createdAt: Date
      createdById: number
    }, ExtArgs["result"]["process"]>
    composites: {}
  }

  type ProcessGetPayload<S extends boolean | null | undefined | ProcessDefaultArgs> = $Result.GetResult<Prisma.$ProcessPayload, S>

  type ProcessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessCountAggregateInputType | true
    }

  export interface ProcessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Process'], meta: { name: 'Process' } }
    /**
     * Find zero or one Process that matches the filter.
     * @param {ProcessFindUniqueArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessFindUniqueArgs>(args: SelectSubset<T, ProcessFindUniqueArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Process that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessFindUniqueOrThrowArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Process that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindFirstArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessFindFirstArgs>(args?: SelectSubset<T, ProcessFindFirstArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Process that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindFirstOrThrowArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processes
     * const processes = await prisma.process.findMany()
     * 
     * // Get first 10 Processes
     * const processes = await prisma.process.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processWithIdOnly = await prisma.process.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessFindManyArgs>(args?: SelectSubset<T, ProcessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Process.
     * @param {ProcessCreateArgs} args - Arguments to create a Process.
     * @example
     * // Create one Process
     * const Process = await prisma.process.create({
     *   data: {
     *     // ... data to create a Process
     *   }
     * })
     * 
     */
    create<T extends ProcessCreateArgs>(args: SelectSubset<T, ProcessCreateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processes.
     * @param {ProcessCreateManyArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const process = await prisma.process.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessCreateManyArgs>(args?: SelectSubset<T, ProcessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Processes and returns the data saved in the database.
     * @param {ProcessCreateManyAndReturnArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const process = await prisma.process.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Processes and only return the `id`
     * const processWithIdOnly = await prisma.process.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Process.
     * @param {ProcessDeleteArgs} args - Arguments to delete one Process.
     * @example
     * // Delete one Process
     * const Process = await prisma.process.delete({
     *   where: {
     *     // ... filter to delete one Process
     *   }
     * })
     * 
     */
    delete<T extends ProcessDeleteArgs>(args: SelectSubset<T, ProcessDeleteArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Process.
     * @param {ProcessUpdateArgs} args - Arguments to update one Process.
     * @example
     * // Update one Process
     * const process = await prisma.process.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessUpdateArgs>(args: SelectSubset<T, ProcessUpdateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processes.
     * @param {ProcessDeleteManyArgs} args - Arguments to filter Processes to delete.
     * @example
     * // Delete a few Processes
     * const { count } = await prisma.process.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessDeleteManyArgs>(args?: SelectSubset<T, ProcessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processes
     * const process = await prisma.process.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessUpdateManyArgs>(args: SelectSubset<T, ProcessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes and returns the data updated in the database.
     * @param {ProcessUpdateManyAndReturnArgs} args - Arguments to update many Processes.
     * @example
     * // Update many Processes
     * const process = await prisma.process.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Processes and only return the `id`
     * const processWithIdOnly = await prisma.process.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Process.
     * @param {ProcessUpsertArgs} args - Arguments to update or create a Process.
     * @example
     * // Update or create a Process
     * const process = await prisma.process.upsert({
     *   create: {
     *     // ... data to create a Process
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Process we want to update
     *   }
     * })
     */
    upsert<T extends ProcessUpsertArgs>(args: SelectSubset<T, ProcessUpsertArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessCountArgs} args - Arguments to filter Processes to count.
     * @example
     * // Count the number of Processes
     * const count = await prisma.process.count({
     *   where: {
     *     // ... the filter for the Processes we want to count
     *   }
     * })
    **/
    count<T extends ProcessCountArgs>(
      args?: Subset<T, ProcessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Process.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessAggregateArgs>(args: Subset<T, ProcessAggregateArgs>): Prisma.PrismaPromise<GetProcessAggregateType<T>>

    /**
     * Group by Process.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessGroupByArgs} args - Group by arguments.
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
      T extends ProcessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessGroupByArgs['orderBy'] }
        : { orderBy?: ProcessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Process model
   */
  readonly fields: ProcessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Process.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Process model
   */
  interface ProcessFieldRefs {
    readonly id: FieldRef<"Process", 'Int'>
    readonly title: FieldRef<"Process", 'String'>
    readonly description: FieldRef<"Process", 'String'>
    readonly processType: FieldRef<"Process", 'ProcessType'>
    readonly processStatus: FieldRef<"Process", 'ProcessStatus'>
    readonly createdAt: FieldRef<"Process", 'DateTime'>
    readonly createdById: FieldRef<"Process", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Process findUnique
   */
  export type ProcessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process findUniqueOrThrow
   */
  export type ProcessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process findFirst
   */
  export type ProcessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process findFirstOrThrow
   */
  export type ProcessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process findMany
   */
  export type ProcessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process create
   */
  export type ProcessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The data needed to create a Process.
     */
    data: XOR<ProcessCreateInput, ProcessUncheckedCreateInput>
  }

  /**
   * Process createMany
   */
  export type ProcessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processes.
     */
    data: ProcessCreateManyInput | ProcessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Process createManyAndReturn
   */
  export type ProcessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * The data used to create many Processes.
     */
    data: ProcessCreateManyInput | ProcessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Process update
   */
  export type ProcessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The data needed to update a Process.
     */
    data: XOR<ProcessUpdateInput, ProcessUncheckedUpdateInput>
    /**
     * Choose, which Process to update.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process updateMany
   */
  export type ProcessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
  }

  /**
   * Process updateManyAndReturn
   */
  export type ProcessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Process upsert
   */
  export type ProcessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The filter to search for the Process to update in case it exists.
     */
    where: ProcessWhereUniqueInput
    /**
     * In case the Process found by the `where` argument doesn't exist, create a new Process with this data.
     */
    create: XOR<ProcessCreateInput, ProcessUncheckedCreateInput>
    /**
     * In case the Process was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessUpdateInput, ProcessUncheckedUpdateInput>
  }

  /**
   * Process delete
   */
  export type ProcessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter which Process to delete.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process deleteMany
   */
  export type ProcessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processes to delete
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to delete.
     */
    limit?: number
  }

  /**
   * Process without action
   */
  export type ProcessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    id: number | null
  }

  export type BudgetSumAggregateOutputType = {
    id: number | null
  }

  export type BudgetMinAggregateOutputType = {
    id: number | null
    budgetStatus: $Enums.BudgetStatus | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: number | null
    budgetStatus: $Enums.BudgetStatus | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    budgetStatus: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    id?: true
  }

  export type BudgetSumAggregateInputType = {
    id?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    budgetStatus?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    budgetStatus?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    budgetStatus?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: number
    budgetStatus: $Enums.BudgetStatus | null
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    budgetStatus?: boolean
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    budgetStatus?: boolean
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    budgetStatus?: boolean
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    budgetStatus?: boolean
  }

  export type BudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "budgetStatus", ExtArgs["result"]["budget"]>

  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      budgetStatus: $Enums.BudgetStatus | null
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BudgetFindUniqueArgs>(args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BudgetFindFirstArgs>(args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BudgetFindManyArgs>(args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
     */
    create<T extends BudgetCreateArgs>(args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BudgetCreateManyArgs>(args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs>(args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
     */
    delete<T extends BudgetDeleteArgs>(args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BudgetUpdateArgs>(args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BudgetDeleteManyArgs>(args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BudgetUpdateManyArgs>(args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets and returns the data updated in the database.
     * @param {BudgetUpdateManyAndReturnArgs} args - Arguments to update many Budgets.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.updateManyAndReturn({
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
    updateManyAndReturn<T extends BudgetUpdateManyAndReturnArgs>(args: SelectSubset<T, BudgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
     */
    upsert<T extends BudgetUpsertArgs>(args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
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
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Budget model
   */
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'Int'>
    readonly budgetStatus: FieldRef<"Budget", 'BudgetStatus'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationInput | BudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data?: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget updateManyAndReturn
   */
  export type BudgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to update.
     */
    limit?: number
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
    /**
     * Limit how many Budgets to delete.
     */
    limit?: number
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Budget
     */
    omit?: BudgetOmit<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    paymentType: $Enums.PaymentType | null
    description: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    paymentType: $Enums.PaymentType | null
    description: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    paymentType: number
    description: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    paymentType?: true
    description?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    paymentType?: true
    description?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    paymentType?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    paymentType: $Enums.PaymentType
    description: string | null
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentType?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentType?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentType?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    paymentType?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentType" | "description" | "createdAt", ExtArgs["result"]["payment"]>

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentType: $Enums.PaymentType
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly paymentType: FieldRef<"Payment", 'PaymentType'>
    readonly description: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
    professionalId: number | null
    sessionTime: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    professionalId: number | null
    sessionTime: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    professionalId: number | null
    dayOfWeek: $Enums.WeekDay | null
    startTime: string | null
    endTime: string | null
    sessionTime: number | null
    repeatsWeekly: boolean | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    professionalId: number | null
    dayOfWeek: $Enums.WeekDay | null
    startTime: string | null
    endTime: string | null
    sessionTime: number | null
    repeatsWeekly: boolean | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    professionalId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    sessionTime: number
    repeatsWeekly: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    professionalId?: true
    sessionTime?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    professionalId?: true
    sessionTime?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    sessionTime?: true
    repeatsWeekly?: true
    isActive?: true
    createdAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    sessionTime?: true
    repeatsWeekly?: true
    isActive?: true
    createdAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    sessionTime?: true
    repeatsWeekly?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    professionalId: number
    dayOfWeek: $Enums.WeekDay
    startTime: string
    endTime: string
    sessionTime: number
    repeatsWeekly: boolean
    isActive: boolean
    createdAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    sessionTime?: boolean
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    sessionTime?: boolean
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    sessionTime?: boolean
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    sessionTime?: boolean
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalId" | "dayOfWeek" | "startTime" | "endTime" | "sessionTime" | "repeatsWeekly" | "isActive" | "createdAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      professional: Prisma.$ProfessionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professionalId: number
      dayOfWeek: $Enums.WeekDay
      startTime: string
      endTime: string
      sessionTime: number
      repeatsWeekly: boolean
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professional<T extends ProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalDefaultArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly professionalId: FieldRef<"Schedule", 'Int'>
    readonly dayOfWeek: FieldRef<"Schedule", 'WeekDay'>
    readonly startTime: FieldRef<"Schedule", 'String'>
    readonly endTime: FieldRef<"Schedule", 'String'>
    readonly sessionTime: FieldRef<"Schedule", 'Int'>
    readonly repeatsWeekly: FieldRef<"Schedule", 'Boolean'>
    readonly isActive: FieldRef<"Schedule", 'Boolean'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
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
    firebaseUid: 'firebaseUid',
    role: 'role',
    email: 'email',
    isActive: 'isActive',
    createdAt: 'createdAt',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    address: 'address',
    dni: 'dni',
    cuil: 'cuil',
    dniProcessingNumber: 'dniProcessingNumber',
    birthday: 'birthday',
    phone: 'phone',
    affiliateNumber: 'affiliateNumber',
    professionalActivity: 'professionalActivity',
    healthInsuranceProvider: 'healthInsuranceProvider',
    patientType: 'patientType',
    patientStatus: 'patientStatus',
    isActive: 'isActive',
    createdAt: 'createdAt',
    userId: 'userId',
    legalGuardianId: 'legalGuardianId'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const HealthInsuranceProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    cuit: 'cuit',
    address: 'address',
    email: 'email',
    phone: 'phone',
    contact: 'contact'
  };

  export type HealthInsuranceProviderScalarFieldEnum = (typeof HealthInsuranceProviderScalarFieldEnum)[keyof typeof HealthInsuranceProviderScalarFieldEnum]


  export const LegalGuardianScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    address: 'address',
    dni: 'dni',
    cuil: 'cuil',
    dniProcessingNumber: 'dniProcessingNumber',
    birthday: 'birthday',
    phone: 'phone',
    professionalActivity: 'professionalActivity',
    healthInsuranceProvider: 'healthInsuranceProvider',
    legalGuardianType: 'legalGuardianType',
    legalGuardianStatus: 'legalGuardianStatus',
    isActive: 'isActive',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type LegalGuardianScalarFieldEnum = (typeof LegalGuardianScalarFieldEnum)[keyof typeof LegalGuardianScalarFieldEnum]


  export const ProfessionalScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    address: 'address',
    dni: 'dni',
    cuil: 'cuil',
    birthday: 'birthday',
    phone: 'phone',
    professionalActivity: 'professionalActivity',
    healthInsuranceProvider: 'healthInsuranceProvider',
    isActive: 'isActive',
    profecionalType: 'profecionalType',
    userId: 'userId'
  };

  export type ProfessionalScalarFieldEnum = (typeof ProfessionalScalarFieldEnum)[keyof typeof ProfessionalScalarFieldEnum]


  export const AdmissionScalarFieldEnum: {
    id: 'id',
    admissionStatus: 'admissionStatus',
    patientId: 'patientId'
  };

  export type AdmissionScalarFieldEnum = (typeof AdmissionScalarFieldEnum)[keyof typeof AdmissionScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startEvent: 'startEvent',
    endEvent: 'endEvent',
    eventType: 'eventType',
    createdAt: 'createdAt',
    status: 'status',
    createdById: 'createdById',
    professionalId: 'professionalId',
    patientId: 'patientId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ProcessScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    processType: 'processType',
    processStatus: 'processStatus',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type ProcessScalarFieldEnum = (typeof ProcessScalarFieldEnum)[keyof typeof ProcessScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    budgetStatus: 'budgetStatus'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    paymentType: 'paymentType',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    professionalId: 'professionalId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    sessionTime: 'sessionTime',
    repeatsWeekly: 'repeatsWeekly',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRoles'
   */
  export type EnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles'>
    


  /**
   * Reference to a field of type 'UserRoles[]'
   */
  export type ListEnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PatientType'
   */
  export type EnumPatientTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientType'>
    


  /**
   * Reference to a field of type 'PatientType[]'
   */
  export type ListEnumPatientTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientType[]'>
    


  /**
   * Reference to a field of type 'PatientStatus'
   */
  export type EnumPatientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientStatus'>
    


  /**
   * Reference to a field of type 'PatientStatus[]'
   */
  export type ListEnumPatientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientStatus[]'>
    


  /**
   * Reference to a field of type 'LegalGuardianType'
   */
  export type EnumLegalGuardianTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LegalGuardianType'>
    


  /**
   * Reference to a field of type 'LegalGuardianType[]'
   */
  export type ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LegalGuardianType[]'>
    


  /**
   * Reference to a field of type 'LegalGuardianStatus'
   */
  export type EnumLegalGuardianStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LegalGuardianStatus'>
    


  /**
   * Reference to a field of type 'LegalGuardianStatus[]'
   */
  export type ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LegalGuardianStatus[]'>
    


  /**
   * Reference to a field of type 'AdmissionStatus'
   */
  export type EnumAdmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionStatus'>
    


  /**
   * Reference to a field of type 'AdmissionStatus[]'
   */
  export type ListEnumAdmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionStatus[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'ProcessType'
   */
  export type EnumProcessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessType'>
    


  /**
   * Reference to a field of type 'ProcessType[]'
   */
  export type ListEnumProcessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessType[]'>
    


  /**
   * Reference to a field of type 'ProcessStatus'
   */
  export type EnumProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessStatus'>
    


  /**
   * Reference to a field of type 'ProcessStatus[]'
   */
  export type ListEnumProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessStatus[]'>
    


  /**
   * Reference to a field of type 'BudgetStatus'
   */
  export type EnumBudgetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BudgetStatus'>
    


  /**
   * Reference to a field of type 'BudgetStatus[]'
   */
  export type ListEnumBudgetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BudgetStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'WeekDay'
   */
  export type EnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay'>
    


  /**
   * Reference to a field of type 'WeekDay[]'
   */
  export type ListEnumWeekDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeekDay[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firebaseUid?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    email?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    legalGuardian?: XOR<LegalGuardianNullableScalarRelationFilter, LegalGuardianWhereInput> | null
    professional?: XOR<ProfessionalNullableScalarRelationFilter, ProfessionalWhereInput> | null
    createdEvents?: EventListRelationFilter
    createdProcesses?: ProcessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    role?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    image?: SortOrderInput | SortOrder
    patient?: PatientOrderByWithRelationInput
    legalGuardian?: LegalGuardianOrderByWithRelationInput
    professional?: ProfessionalOrderByWithRelationInput
    createdEvents?: EventOrderByRelationAggregateInput
    createdProcesses?: ProcessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firebaseUid?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    image?: StringNullableFilter<"User"> | string | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    legalGuardian?: XOR<LegalGuardianNullableScalarRelationFilter, LegalGuardianWhereInput> | null
    professional?: XOR<ProfessionalNullableScalarRelationFilter, ProfessionalWhereInput> | null
    createdEvents?: EventListRelationFilter
    createdProcesses?: ProcessListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    role?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firebaseUid?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRolesWithAggregatesFilter<"User"> | $Enums.UserRoles
    email?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    dni?: StringFilter<"Patient"> | string
    cuil?: StringFilter<"Patient"> | string
    dniProcessingNumber?: StringFilter<"Patient"> | string
    birthday?: DateTimeFilter<"Patient"> | Date | string
    phone?: StringFilter<"Patient"> | string
    affiliateNumber?: StringFilter<"Patient"> | string
    professionalActivity?: StringNullableFilter<"Patient"> | string | null
    healthInsuranceProvider?: StringNullableFilter<"Patient"> | string | null
    patientType?: EnumPatientTypeNullableFilter<"Patient"> | $Enums.PatientType | null
    patientStatus?: EnumPatientStatusNullableFilter<"Patient"> | $Enums.PatientStatus | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    userId?: IntNullableFilter<"Patient"> | number | null
    legalGuardianId?: IntNullableFilter<"Patient"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    legalGuardian?: XOR<LegalGuardianNullableScalarRelationFilter, LegalGuardianWhereInput> | null
    events?: EventListRelationFilter
    admission?: XOR<AdmissionNullableScalarRelationFilter, AdmissionWhereInput> | null
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    affiliateNumber?: SortOrder
    professionalActivity?: SortOrderInput | SortOrder
    healthInsuranceProvider?: SortOrderInput | SortOrder
    patientType?: SortOrderInput | SortOrder
    patientStatus?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    legalGuardianId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    legalGuardian?: LegalGuardianOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
    admission?: AdmissionOrderByWithRelationInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: string
    cuil?: string
    userId?: number
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    dniProcessingNumber?: StringFilter<"Patient"> | string
    birthday?: DateTimeFilter<"Patient"> | Date | string
    phone?: StringFilter<"Patient"> | string
    affiliateNumber?: StringFilter<"Patient"> | string
    professionalActivity?: StringNullableFilter<"Patient"> | string | null
    healthInsuranceProvider?: StringNullableFilter<"Patient"> | string | null
    patientType?: EnumPatientTypeNullableFilter<"Patient"> | $Enums.PatientType | null
    patientStatus?: EnumPatientStatusNullableFilter<"Patient"> | $Enums.PatientStatus | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    legalGuardianId?: IntNullableFilter<"Patient"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    legalGuardian?: XOR<LegalGuardianNullableScalarRelationFilter, LegalGuardianWhereInput> | null
    events?: EventListRelationFilter
    admission?: XOR<AdmissionNullableScalarRelationFilter, AdmissionWhereInput> | null
  }, "id" | "dni" | "cuil" | "userId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    affiliateNumber?: SortOrder
    professionalActivity?: SortOrderInput | SortOrder
    healthInsuranceProvider?: SortOrderInput | SortOrder
    patientType?: SortOrderInput | SortOrder
    patientStatus?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    legalGuardianId?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    firstName?: StringWithAggregatesFilter<"Patient"> | string
    lastName?: StringWithAggregatesFilter<"Patient"> | string
    address?: StringWithAggregatesFilter<"Patient"> | string
    dni?: StringWithAggregatesFilter<"Patient"> | string
    cuil?: StringWithAggregatesFilter<"Patient"> | string
    dniProcessingNumber?: StringWithAggregatesFilter<"Patient"> | string
    birthday?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    phone?: StringWithAggregatesFilter<"Patient"> | string
    affiliateNumber?: StringWithAggregatesFilter<"Patient"> | string
    professionalActivity?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    healthInsuranceProvider?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    patientType?: EnumPatientTypeNullableWithAggregatesFilter<"Patient"> | $Enums.PatientType | null
    patientStatus?: EnumPatientStatusNullableWithAggregatesFilter<"Patient"> | $Enums.PatientStatus | null
    isActive?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Patient"> | number | null
    legalGuardianId?: IntNullableWithAggregatesFilter<"Patient"> | number | null
  }

  export type HealthInsuranceProviderWhereInput = {
    AND?: HealthInsuranceProviderWhereInput | HealthInsuranceProviderWhereInput[]
    OR?: HealthInsuranceProviderWhereInput[]
    NOT?: HealthInsuranceProviderWhereInput | HealthInsuranceProviderWhereInput[]
    id?: IntFilter<"HealthInsuranceProvider"> | number
    name?: StringFilter<"HealthInsuranceProvider"> | string
    description?: StringFilter<"HealthInsuranceProvider"> | string
    cuit?: StringFilter<"HealthInsuranceProvider"> | string
    address?: StringFilter<"HealthInsuranceProvider"> | string
    email?: StringFilter<"HealthInsuranceProvider"> | string
    phone?: StringFilter<"HealthInsuranceProvider"> | string
    contact?: StringFilter<"HealthInsuranceProvider"> | string
  }

  export type HealthInsuranceProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cuit?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contact?: SortOrder
  }

  export type HealthInsuranceProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HealthInsuranceProviderWhereInput | HealthInsuranceProviderWhereInput[]
    OR?: HealthInsuranceProviderWhereInput[]
    NOT?: HealthInsuranceProviderWhereInput | HealthInsuranceProviderWhereInput[]
    name?: StringFilter<"HealthInsuranceProvider"> | string
    description?: StringFilter<"HealthInsuranceProvider"> | string
    cuit?: StringFilter<"HealthInsuranceProvider"> | string
    address?: StringFilter<"HealthInsuranceProvider"> | string
    email?: StringFilter<"HealthInsuranceProvider"> | string
    phone?: StringFilter<"HealthInsuranceProvider"> | string
    contact?: StringFilter<"HealthInsuranceProvider"> | string
  }, "id">

  export type HealthInsuranceProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cuit?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contact?: SortOrder
    _count?: HealthInsuranceProviderCountOrderByAggregateInput
    _avg?: HealthInsuranceProviderAvgOrderByAggregateInput
    _max?: HealthInsuranceProviderMaxOrderByAggregateInput
    _min?: HealthInsuranceProviderMinOrderByAggregateInput
    _sum?: HealthInsuranceProviderSumOrderByAggregateInput
  }

  export type HealthInsuranceProviderScalarWhereWithAggregatesInput = {
    AND?: HealthInsuranceProviderScalarWhereWithAggregatesInput | HealthInsuranceProviderScalarWhereWithAggregatesInput[]
    OR?: HealthInsuranceProviderScalarWhereWithAggregatesInput[]
    NOT?: HealthInsuranceProviderScalarWhereWithAggregatesInput | HealthInsuranceProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HealthInsuranceProvider"> | number
    name?: StringWithAggregatesFilter<"HealthInsuranceProvider"> | string
    description?: StringWithAggregatesFilter<"HealthInsuranceProvider"> | string
    cuit?: StringWithAggregatesFilter<"HealthInsuranceProvider"> | string
    address?: StringWithAggregatesFilter<"HealthInsuranceProvider"> | string
    email?: StringWithAggregatesFilter<"HealthInsuranceProvider"> | string
    phone?: StringWithAggregatesFilter<"HealthInsuranceProvider"> | string
    contact?: StringWithAggregatesFilter<"HealthInsuranceProvider"> | string
  }

  export type LegalGuardianWhereInput = {
    AND?: LegalGuardianWhereInput | LegalGuardianWhereInput[]
    OR?: LegalGuardianWhereInput[]
    NOT?: LegalGuardianWhereInput | LegalGuardianWhereInput[]
    id?: IntFilter<"LegalGuardian"> | number
    firstName?: StringFilter<"LegalGuardian"> | string
    lastName?: StringFilter<"LegalGuardian"> | string
    address?: StringFilter<"LegalGuardian"> | string
    dni?: StringFilter<"LegalGuardian"> | string
    cuil?: StringFilter<"LegalGuardian"> | string
    dniProcessingNumber?: StringFilter<"LegalGuardian"> | string
    birthday?: DateTimeFilter<"LegalGuardian"> | Date | string
    phone?: StringFilter<"LegalGuardian"> | string
    professionalActivity?: StringFilter<"LegalGuardian"> | string
    healthInsuranceProvider?: StringNullableFilter<"LegalGuardian"> | string | null
    legalGuardianType?: EnumLegalGuardianTypeNullableFilter<"LegalGuardian"> | $Enums.LegalGuardianType | null
    legalGuardianStatus?: EnumLegalGuardianStatusNullableFilter<"LegalGuardian"> | $Enums.LegalGuardianStatus | null
    isActive?: BoolFilter<"LegalGuardian"> | boolean
    createdAt?: DateTimeFilter<"LegalGuardian"> | Date | string
    userId?: IntNullableFilter<"LegalGuardian"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    patients?: PatientListRelationFilter
  }

  export type LegalGuardianOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrderInput | SortOrder
    legalGuardianType?: SortOrderInput | SortOrder
    legalGuardianStatus?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    patients?: PatientOrderByRelationAggregateInput
  }

  export type LegalGuardianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: LegalGuardianWhereInput | LegalGuardianWhereInput[]
    OR?: LegalGuardianWhereInput[]
    NOT?: LegalGuardianWhereInput | LegalGuardianWhereInput[]
    firstName?: StringFilter<"LegalGuardian"> | string
    lastName?: StringFilter<"LegalGuardian"> | string
    address?: StringFilter<"LegalGuardian"> | string
    dni?: StringFilter<"LegalGuardian"> | string
    cuil?: StringFilter<"LegalGuardian"> | string
    dniProcessingNumber?: StringFilter<"LegalGuardian"> | string
    birthday?: DateTimeFilter<"LegalGuardian"> | Date | string
    phone?: StringFilter<"LegalGuardian"> | string
    professionalActivity?: StringFilter<"LegalGuardian"> | string
    healthInsuranceProvider?: StringNullableFilter<"LegalGuardian"> | string | null
    legalGuardianType?: EnumLegalGuardianTypeNullableFilter<"LegalGuardian"> | $Enums.LegalGuardianType | null
    legalGuardianStatus?: EnumLegalGuardianStatusNullableFilter<"LegalGuardian"> | $Enums.LegalGuardianStatus | null
    isActive?: BoolFilter<"LegalGuardian"> | boolean
    createdAt?: DateTimeFilter<"LegalGuardian"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    patients?: PatientListRelationFilter
  }, "id" | "userId">

  export type LegalGuardianOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrderInput | SortOrder
    legalGuardianType?: SortOrderInput | SortOrder
    legalGuardianStatus?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: LegalGuardianCountOrderByAggregateInput
    _avg?: LegalGuardianAvgOrderByAggregateInput
    _max?: LegalGuardianMaxOrderByAggregateInput
    _min?: LegalGuardianMinOrderByAggregateInput
    _sum?: LegalGuardianSumOrderByAggregateInput
  }

  export type LegalGuardianScalarWhereWithAggregatesInput = {
    AND?: LegalGuardianScalarWhereWithAggregatesInput | LegalGuardianScalarWhereWithAggregatesInput[]
    OR?: LegalGuardianScalarWhereWithAggregatesInput[]
    NOT?: LegalGuardianScalarWhereWithAggregatesInput | LegalGuardianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LegalGuardian"> | number
    firstName?: StringWithAggregatesFilter<"LegalGuardian"> | string
    lastName?: StringWithAggregatesFilter<"LegalGuardian"> | string
    address?: StringWithAggregatesFilter<"LegalGuardian"> | string
    dni?: StringWithAggregatesFilter<"LegalGuardian"> | string
    cuil?: StringWithAggregatesFilter<"LegalGuardian"> | string
    dniProcessingNumber?: StringWithAggregatesFilter<"LegalGuardian"> | string
    birthday?: DateTimeWithAggregatesFilter<"LegalGuardian"> | Date | string
    phone?: StringWithAggregatesFilter<"LegalGuardian"> | string
    professionalActivity?: StringWithAggregatesFilter<"LegalGuardian"> | string
    healthInsuranceProvider?: StringNullableWithAggregatesFilter<"LegalGuardian"> | string | null
    legalGuardianType?: EnumLegalGuardianTypeNullableWithAggregatesFilter<"LegalGuardian"> | $Enums.LegalGuardianType | null
    legalGuardianStatus?: EnumLegalGuardianStatusNullableWithAggregatesFilter<"LegalGuardian"> | $Enums.LegalGuardianStatus | null
    isActive?: BoolWithAggregatesFilter<"LegalGuardian"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LegalGuardian"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"LegalGuardian"> | number | null
  }

  export type ProfessionalWhereInput = {
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    id?: IntFilter<"Professional"> | number
    firstName?: StringFilter<"Professional"> | string
    lastName?: StringFilter<"Professional"> | string
    address?: StringFilter<"Professional"> | string
    dni?: StringFilter<"Professional"> | string
    cuil?: StringFilter<"Professional"> | string
    birthday?: DateTimeFilter<"Professional"> | Date | string
    phone?: StringFilter<"Professional"> | string
    professionalActivity?: StringFilter<"Professional"> | string
    healthInsuranceProvider?: StringNullableFilter<"Professional"> | string | null
    isActive?: BoolFilter<"Professional"> | boolean
    profecionalType?: StringFilter<"Professional"> | string
    userId?: IntNullableFilter<"Professional"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    events?: EventListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type ProfessionalOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrderInput | SortOrder
    isActive?: SortOrder
    profecionalType?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type ProfessionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: string
    cuil?: string
    userId?: number
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    firstName?: StringFilter<"Professional"> | string
    lastName?: StringFilter<"Professional"> | string
    address?: StringFilter<"Professional"> | string
    birthday?: DateTimeFilter<"Professional"> | Date | string
    phone?: StringFilter<"Professional"> | string
    professionalActivity?: StringFilter<"Professional"> | string
    healthInsuranceProvider?: StringNullableFilter<"Professional"> | string | null
    isActive?: BoolFilter<"Professional"> | boolean
    profecionalType?: StringFilter<"Professional"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    events?: EventListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id" | "dni" | "cuil" | "userId">

  export type ProfessionalOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrderInput | SortOrder
    isActive?: SortOrder
    profecionalType?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ProfessionalCountOrderByAggregateInput
    _avg?: ProfessionalAvgOrderByAggregateInput
    _max?: ProfessionalMaxOrderByAggregateInput
    _min?: ProfessionalMinOrderByAggregateInput
    _sum?: ProfessionalSumOrderByAggregateInput
  }

  export type ProfessionalScalarWhereWithAggregatesInput = {
    AND?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    OR?: ProfessionalScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Professional"> | number
    firstName?: StringWithAggregatesFilter<"Professional"> | string
    lastName?: StringWithAggregatesFilter<"Professional"> | string
    address?: StringWithAggregatesFilter<"Professional"> | string
    dni?: StringWithAggregatesFilter<"Professional"> | string
    cuil?: StringWithAggregatesFilter<"Professional"> | string
    birthday?: DateTimeWithAggregatesFilter<"Professional"> | Date | string
    phone?: StringWithAggregatesFilter<"Professional"> | string
    professionalActivity?: StringWithAggregatesFilter<"Professional"> | string
    healthInsuranceProvider?: StringNullableWithAggregatesFilter<"Professional"> | string | null
    isActive?: BoolWithAggregatesFilter<"Professional"> | boolean
    profecionalType?: StringWithAggregatesFilter<"Professional"> | string
    userId?: IntNullableWithAggregatesFilter<"Professional"> | number | null
  }

  export type AdmissionWhereInput = {
    AND?: AdmissionWhereInput | AdmissionWhereInput[]
    OR?: AdmissionWhereInput[]
    NOT?: AdmissionWhereInput | AdmissionWhereInput[]
    id?: IntFilter<"Admission"> | number
    admissionStatus?: EnumAdmissionStatusNullableFilter<"Admission"> | $Enums.AdmissionStatus | null
    patientId?: IntFilter<"Admission"> | number
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type AdmissionOrderByWithRelationInput = {
    id?: SortOrder
    admissionStatus?: SortOrderInput | SortOrder
    patientId?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type AdmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patientId?: number
    AND?: AdmissionWhereInput | AdmissionWhereInput[]
    OR?: AdmissionWhereInput[]
    NOT?: AdmissionWhereInput | AdmissionWhereInput[]
    admissionStatus?: EnumAdmissionStatusNullableFilter<"Admission"> | $Enums.AdmissionStatus | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId">

  export type AdmissionOrderByWithAggregationInput = {
    id?: SortOrder
    admissionStatus?: SortOrderInput | SortOrder
    patientId?: SortOrder
    _count?: AdmissionCountOrderByAggregateInput
    _avg?: AdmissionAvgOrderByAggregateInput
    _max?: AdmissionMaxOrderByAggregateInput
    _min?: AdmissionMinOrderByAggregateInput
    _sum?: AdmissionSumOrderByAggregateInput
  }

  export type AdmissionScalarWhereWithAggregatesInput = {
    AND?: AdmissionScalarWhereWithAggregatesInput | AdmissionScalarWhereWithAggregatesInput[]
    OR?: AdmissionScalarWhereWithAggregatesInput[]
    NOT?: AdmissionScalarWhereWithAggregatesInput | AdmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admission"> | number
    admissionStatus?: EnumAdmissionStatusNullableWithAggregatesFilter<"Admission"> | $Enums.AdmissionStatus | null
    patientId?: IntWithAggregatesFilter<"Admission"> | number
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startEvent?: DateTimeFilter<"Event"> | Date | string
    endEvent?: DateTimeFilter<"Event"> | Date | string
    eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    createdAt?: DateTimeFilter<"Event"> | Date | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    createdById?: IntFilter<"Event"> | number
    professionalId?: IntFilter<"Event"> | number
    patientId?: IntNullableFilter<"Event"> | number | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startEvent?: SortOrder
    endEvent?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    professionalId?: SortOrder
    patientId?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    professional?: ProfessionalOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startEvent?: DateTimeFilter<"Event"> | Date | string
    endEvent?: DateTimeFilter<"Event"> | Date | string
    eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    createdAt?: DateTimeFilter<"Event"> | Date | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    createdById?: IntFilter<"Event"> | number
    professionalId?: IntFilter<"Event"> | number
    patientId?: IntNullableFilter<"Event"> | number | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startEvent?: SortOrder
    endEvent?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    professionalId?: SortOrder
    patientId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startEvent?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endEvent?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    eventType?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    createdById?: IntWithAggregatesFilter<"Event"> | number
    professionalId?: IntWithAggregatesFilter<"Event"> | number
    patientId?: IntNullableWithAggregatesFilter<"Event"> | number | null
  }

  export type ProcessWhereInput = {
    AND?: ProcessWhereInput | ProcessWhereInput[]
    OR?: ProcessWhereInput[]
    NOT?: ProcessWhereInput | ProcessWhereInput[]
    id?: IntFilter<"Process"> | number
    title?: StringFilter<"Process"> | string
    description?: StringNullableFilter<"Process"> | string | null
    processType?: EnumProcessTypeFilter<"Process"> | $Enums.ProcessType
    processStatus?: EnumProcessStatusFilter<"Process"> | $Enums.ProcessStatus
    createdAt?: DateTimeFilter<"Process"> | Date | string
    createdById?: IntFilter<"Process"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProcessOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    processType?: SortOrder
    processStatus?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type ProcessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProcessWhereInput | ProcessWhereInput[]
    OR?: ProcessWhereInput[]
    NOT?: ProcessWhereInput | ProcessWhereInput[]
    title?: StringFilter<"Process"> | string
    description?: StringNullableFilter<"Process"> | string | null
    processType?: EnumProcessTypeFilter<"Process"> | $Enums.ProcessType
    processStatus?: EnumProcessStatusFilter<"Process"> | $Enums.ProcessStatus
    createdAt?: DateTimeFilter<"Process"> | Date | string
    createdById?: IntFilter<"Process"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProcessOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    processType?: SortOrder
    processStatus?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    _count?: ProcessCountOrderByAggregateInput
    _avg?: ProcessAvgOrderByAggregateInput
    _max?: ProcessMaxOrderByAggregateInput
    _min?: ProcessMinOrderByAggregateInput
    _sum?: ProcessSumOrderByAggregateInput
  }

  export type ProcessScalarWhereWithAggregatesInput = {
    AND?: ProcessScalarWhereWithAggregatesInput | ProcessScalarWhereWithAggregatesInput[]
    OR?: ProcessScalarWhereWithAggregatesInput[]
    NOT?: ProcessScalarWhereWithAggregatesInput | ProcessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Process"> | number
    title?: StringWithAggregatesFilter<"Process"> | string
    description?: StringNullableWithAggregatesFilter<"Process"> | string | null
    processType?: EnumProcessTypeWithAggregatesFilter<"Process"> | $Enums.ProcessType
    processStatus?: EnumProcessStatusWithAggregatesFilter<"Process"> | $Enums.ProcessStatus
    createdAt?: DateTimeWithAggregatesFilter<"Process"> | Date | string
    createdById?: IntWithAggregatesFilter<"Process"> | number
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: IntFilter<"Budget"> | number
    budgetStatus?: EnumBudgetStatusNullableFilter<"Budget"> | $Enums.BudgetStatus | null
  }

  export type BudgetOrderByWithRelationInput = {
    id?: SortOrder
    budgetStatus?: SortOrderInput | SortOrder
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    budgetStatus?: EnumBudgetStatusNullableFilter<"Budget"> | $Enums.BudgetStatus | null
  }, "id">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    budgetStatus?: SortOrderInput | SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Budget"> | number
    budgetStatus?: EnumBudgetStatusNullableWithAggregatesFilter<"Budget"> | $Enums.BudgetStatus | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    paymentType?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    description?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    paymentType?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    paymentType?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    description?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    paymentType?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    paymentType?: EnumPaymentTypeWithAggregatesFilter<"Payment"> | $Enums.PaymentType
    description?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    professionalId?: IntFilter<"Schedule"> | number
    dayOfWeek?: EnumWeekDayFilter<"Schedule"> | $Enums.WeekDay
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    sessionTime?: IntFilter<"Schedule"> | number
    repeatsWeekly?: BoolFilter<"Schedule"> | boolean
    isActive?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sessionTime?: SortOrder
    repeatsWeekly?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    professional?: ProfessionalOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    professionalId?: IntFilter<"Schedule"> | number
    dayOfWeek?: EnumWeekDayFilter<"Schedule"> | $Enums.WeekDay
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    sessionTime?: IntFilter<"Schedule"> | number
    repeatsWeekly?: BoolFilter<"Schedule"> | boolean
    isActive?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sessionTime?: SortOrder
    repeatsWeekly?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    professionalId?: IntWithAggregatesFilter<"Schedule"> | number
    dayOfWeek?: EnumWeekDayWithAggregatesFilter<"Schedule"> | $Enums.WeekDay
    startTime?: StringWithAggregatesFilter<"Schedule"> | string
    endTime?: StringWithAggregatesFilter<"Schedule"> | string
    sessionTime?: IntWithAggregatesFilter<"Schedule"> | number
    repeatsWeekly?: BoolWithAggregatesFilter<"Schedule"> | boolean
    isActive?: BoolWithAggregatesFilter<"Schedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type UserCreateInput = {
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientCreateNestedOneWithoutUserInput
    legalGuardian?: LegalGuardianCreateNestedOneWithoutUserInput
    professional?: ProfessionalCreateNestedOneWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    createdProcesses?: ProcessCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    legalGuardian?: LegalGuardianUncheckedCreateNestedOneWithoutUserInput
    professional?: ProfessionalUncheckedCreateNestedOneWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    createdProcesses?: ProcessUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneWithoutUserNestedInput
    legalGuardian?: LegalGuardianUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUpdateOneWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    createdProcesses?: ProcessUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    legalGuardian?: LegalGuardianUncheckedUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUncheckedUpdateOneWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    createdProcesses?: ProcessUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientCreateInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPatientInput
    legalGuardian?: LegalGuardianCreateNestedOneWithoutPatientsInput
    events?: EventCreateNestedManyWithoutPatientInput
    admission?: AdmissionCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
    legalGuardianId?: number | null
    events?: EventUncheckedCreateNestedManyWithoutPatientInput
    admission?: AdmissionUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPatientNestedInput
    legalGuardian?: LegalGuardianUpdateOneWithoutPatientsNestedInput
    events?: EventUpdateManyWithoutPatientNestedInput
    admission?: AdmissionUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    legalGuardianId?: NullableIntFieldUpdateOperationsInput | number | null
    events?: EventUncheckedUpdateManyWithoutPatientNestedInput
    admission?: AdmissionUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
    legalGuardianId?: number | null
  }

  export type PatientUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    legalGuardianId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HealthInsuranceProviderCreateInput = {
    name: string
    description: string
    cuit: string
    address: string
    email: string
    phone: string
    contact: string
  }

  export type HealthInsuranceProviderUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    cuit: string
    address: string
    email: string
    phone: string
    contact: string
  }

  export type HealthInsuranceProviderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type HealthInsuranceProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type HealthInsuranceProviderCreateManyInput = {
    id?: number
    name: string
    description: string
    cuit: string
    address: string
    email: string
    phone: string
    contact: string
  }

  export type HealthInsuranceProviderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type HealthInsuranceProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
  }

  export type LegalGuardianCreateInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    legalGuardianType?: $Enums.LegalGuardianType | null
    legalGuardianStatus?: $Enums.LegalGuardianStatus | null
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutLegalGuardianInput
    patients?: PatientCreateNestedManyWithoutLegalGuardianInput
  }

  export type LegalGuardianUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    legalGuardianType?: $Enums.LegalGuardianType | null
    legalGuardianStatus?: $Enums.LegalGuardianStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
    patients?: PatientUncheckedCreateNestedManyWithoutLegalGuardianInput
  }

  export type LegalGuardianUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardianType?: NullableEnumLegalGuardianTypeFieldUpdateOperationsInput | $Enums.LegalGuardianType | null
    legalGuardianStatus?: NullableEnumLegalGuardianStatusFieldUpdateOperationsInput | $Enums.LegalGuardianStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLegalGuardianNestedInput
    patients?: PatientUpdateManyWithoutLegalGuardianNestedInput
  }

  export type LegalGuardianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardianType?: NullableEnumLegalGuardianTypeFieldUpdateOperationsInput | $Enums.LegalGuardianType | null
    legalGuardianStatus?: NullableEnumLegalGuardianStatusFieldUpdateOperationsInput | $Enums.LegalGuardianStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    patients?: PatientUncheckedUpdateManyWithoutLegalGuardianNestedInput
  }

  export type LegalGuardianCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    legalGuardianType?: $Enums.LegalGuardianType | null
    legalGuardianStatus?: $Enums.LegalGuardianStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
  }

  export type LegalGuardianUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardianType?: NullableEnumLegalGuardianTypeFieldUpdateOperationsInput | $Enums.LegalGuardianType | null
    legalGuardianStatus?: NullableEnumLegalGuardianStatusFieldUpdateOperationsInput | $Enums.LegalGuardianStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegalGuardianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardianType?: NullableEnumLegalGuardianTypeFieldUpdateOperationsInput | $Enums.LegalGuardianType | null
    legalGuardianStatus?: NullableEnumLegalGuardianStatusFieldUpdateOperationsInput | $Enums.LegalGuardianStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProfessionalCreateInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    user?: UserCreateNestedOneWithoutProfessionalInput
    events?: EventCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    userId?: number | null
    events?: EventUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutProfessionalNestedInput
    events?: EventUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    events?: EventUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    userId?: number | null
  }

  export type ProfessionalUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdmissionCreateInput = {
    admissionStatus?: $Enums.AdmissionStatus | null
    patient: PatientCreateNestedOneWithoutAdmissionInput
  }

  export type AdmissionUncheckedCreateInput = {
    id?: number
    admissionStatus?: $Enums.AdmissionStatus | null
    patientId: number
  }

  export type AdmissionUpdateInput = {
    admissionStatus?: NullableEnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus | null
    patient?: PatientUpdateOneRequiredWithoutAdmissionNestedInput
  }

  export type AdmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionStatus?: NullableEnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus | null
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type AdmissionCreateManyInput = {
    id?: number
    admissionStatus?: $Enums.AdmissionStatus | null
    patientId: number
  }

  export type AdmissionUpdateManyMutationInput = {
    admissionStatus?: NullableEnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus | null
  }

  export type AdmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionStatus?: NullableEnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus | null
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateInput = {
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    professional: ProfessionalCreateNestedOneWithoutEventsInput
    patient?: PatientCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdById: number
    professionalId: number
    patientId?: number | null
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    professional?: ProfessionalUpdateOneRequiredWithoutEventsNestedInput
    patient?: PatientUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdById?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdById: number
    professionalId: number
    patientId?: number | null
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdById?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProcessCreateInput = {
    title: string
    description?: string | null
    processType: $Enums.ProcessType
    processStatus: $Enums.ProcessStatus
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedProcessesInput
  }

  export type ProcessUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    processType: $Enums.ProcessType
    processStatus: $Enums.ProcessStatus
    createdAt?: Date | string
    createdById: number
  }

  export type ProcessUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedProcessesNestedInput
  }

  export type ProcessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type ProcessCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    processType: $Enums.ProcessType
    processStatus: $Enums.ProcessStatus
    createdAt?: Date | string
    createdById: number
  }

  export type ProcessUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type BudgetCreateInput = {
    budgetStatus?: $Enums.BudgetStatus | null
  }

  export type BudgetUncheckedCreateInput = {
    id?: number
    budgetStatus?: $Enums.BudgetStatus | null
  }

  export type BudgetUpdateInput = {
    budgetStatus?: NullableEnumBudgetStatusFieldUpdateOperationsInput | $Enums.BudgetStatus | null
  }

  export type BudgetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    budgetStatus?: NullableEnumBudgetStatusFieldUpdateOperationsInput | $Enums.BudgetStatus | null
  }

  export type BudgetCreateManyInput = {
    id?: number
    budgetStatus?: $Enums.BudgetStatus | null
  }

  export type BudgetUpdateManyMutationInput = {
    budgetStatus?: NullableEnumBudgetStatusFieldUpdateOperationsInput | $Enums.BudgetStatus | null
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    budgetStatus?: NullableEnumBudgetStatusFieldUpdateOperationsInput | $Enums.BudgetStatus | null
  }

  export type PaymentCreateInput = {
    paymentType: $Enums.PaymentType
    description?: string | null
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    paymentType: $Enums.PaymentType
    description?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    paymentType: $Enums.PaymentType
    description?: string | null
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    dayOfWeek: $Enums.WeekDay
    startTime: string
    endTime: string
    sessionTime?: number
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: Date | string
    professional: ProfessionalCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    professionalId: number
    dayOfWeek: $Enums.WeekDay
    startTime: string
    endTime: string
    sessionTime?: number
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ScheduleUpdateInput = {
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    sessionTime?: IntFieldUpdateOperationsInput | number
    repeatsWeekly?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    sessionTime?: IntFieldUpdateOperationsInput | number
    repeatsWeekly?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyInput = {
    id?: number
    professionalId: number
    dayOfWeek: $Enums.WeekDay
    startTime: string
    endTime: string
    sessionTime?: number
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    sessionTime?: IntFieldUpdateOperationsInput | number
    repeatsWeekly?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    sessionTime?: IntFieldUpdateOperationsInput | number
    repeatsWeekly?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type LegalGuardianNullableScalarRelationFilter = {
    is?: LegalGuardianWhereInput | null
    isNot?: LegalGuardianWhereInput | null
  }

  export type ProfessionalNullableScalarRelationFilter = {
    is?: ProfessionalWhereInput | null
    isNot?: ProfessionalWhereInput | null
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type ProcessListRelationFilter = {
    every?: ProcessWhereInput
    some?: ProcessWhereInput
    none?: ProcessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    role?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    image?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    role?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    role?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    image?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumPatientTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientType | EnumPatientTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PatientType[] | ListEnumPatientTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PatientType[] | ListEnumPatientTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPatientTypeNullableFilter<$PrismaModel> | $Enums.PatientType | null
  }

  export type EnumPatientStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPatientStatusNullableFilter<$PrismaModel> | $Enums.PatientStatus | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AdmissionNullableScalarRelationFilter = {
    is?: AdmissionWhereInput | null
    isNot?: AdmissionWhereInput | null
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    affiliateNumber?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    patientType?: SortOrder
    patientStatus?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    legalGuardianId?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    legalGuardianId?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    affiliateNumber?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    patientType?: SortOrder
    patientStatus?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    legalGuardianId?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    affiliateNumber?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    patientType?: SortOrder
    patientStatus?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    legalGuardianId?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    legalGuardianId?: SortOrder
  }

  export type EnumPatientTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientType | EnumPatientTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PatientType[] | ListEnumPatientTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PatientType[] | ListEnumPatientTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPatientTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PatientType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPatientTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumPatientTypeNullableFilter<$PrismaModel>
  }

  export type EnumPatientStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPatientStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PatientStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPatientStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPatientStatusNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type HealthInsuranceProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cuit?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contact?: SortOrder
  }

  export type HealthInsuranceProviderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HealthInsuranceProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cuit?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contact?: SortOrder
  }

  export type HealthInsuranceProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cuit?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    contact?: SortOrder
  }

  export type HealthInsuranceProviderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumLegalGuardianTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalGuardianType | EnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LegalGuardianType[] | ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LegalGuardianType[] | ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLegalGuardianTypeNullableFilter<$PrismaModel> | $Enums.LegalGuardianType | null
  }

  export type EnumLegalGuardianStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalGuardianStatus | EnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LegalGuardianStatus[] | ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LegalGuardianStatus[] | ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLegalGuardianStatusNullableFilter<$PrismaModel> | $Enums.LegalGuardianStatus | null
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LegalGuardianCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    legalGuardianType?: SortOrder
    legalGuardianStatus?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type LegalGuardianAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LegalGuardianMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    legalGuardianType?: SortOrder
    legalGuardianStatus?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type LegalGuardianMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    dniProcessingNumber?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    legalGuardianType?: SortOrder
    legalGuardianStatus?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type LegalGuardianSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumLegalGuardianTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalGuardianType | EnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LegalGuardianType[] | ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LegalGuardianType[] | ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLegalGuardianTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LegalGuardianType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLegalGuardianTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumLegalGuardianTypeNullableFilter<$PrismaModel>
  }

  export type EnumLegalGuardianStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalGuardianStatus | EnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LegalGuardianStatus[] | ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LegalGuardianStatus[] | ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLegalGuardianStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.LegalGuardianStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLegalGuardianStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumLegalGuardianStatusNullableFilter<$PrismaModel>
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    isActive?: SortOrder
    profecionalType?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    isActive?: SortOrder
    profecionalType?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    address?: SortOrder
    dni?: SortOrder
    cuil?: SortOrder
    birthday?: SortOrder
    phone?: SortOrder
    professionalActivity?: SortOrder
    healthInsuranceProvider?: SortOrder
    isActive?: SortOrder
    profecionalType?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAdmissionStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdmissionStatusNullableFilter<$PrismaModel> | $Enums.AdmissionStatus | null
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type AdmissionCountOrderByAggregateInput = {
    id?: SortOrder
    admissionStatus?: SortOrder
    patientId?: SortOrder
  }

  export type AdmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type AdmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    admissionStatus?: SortOrder
    patientId?: SortOrder
  }

  export type AdmissionMinOrderByAggregateInput = {
    id?: SortOrder
    admissionStatus?: SortOrder
    patientId?: SortOrder
  }

  export type AdmissionSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type EnumAdmissionStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdmissionStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAdmissionStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAdmissionStatusNullableFilter<$PrismaModel>
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfessionalScalarRelationFilter = {
    is?: ProfessionalWhereInput
    isNot?: ProfessionalWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startEvent?: SortOrder
    endEvent?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    professionalId?: SortOrder
    patientId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    professionalId?: SortOrder
    patientId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startEvent?: SortOrder
    endEvent?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    professionalId?: SortOrder
    patientId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startEvent?: SortOrder
    endEvent?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    professionalId?: SortOrder
    patientId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    professionalId?: SortOrder
    patientId?: SortOrder
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type EnumProcessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeFilter<$PrismaModel> | $Enums.ProcessType
  }

  export type EnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus
  }

  export type ProcessCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    processType?: SortOrder
    processStatus?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProcessAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type ProcessMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    processType?: SortOrder
    processStatus?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProcessMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    processType?: SortOrder
    processStatus?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProcessSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type EnumProcessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProcessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessTypeFilter<$PrismaModel>
    _max?: NestedEnumProcessTypeFilter<$PrismaModel>
  }

  export type EnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessStatusFilter<$PrismaModel>
  }

  export type EnumBudgetStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetStatus | EnumBudgetStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BudgetStatus[] | ListEnumBudgetStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BudgetStatus[] | ListEnumBudgetStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBudgetStatusNullableFilter<$PrismaModel> | $Enums.BudgetStatus | null
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    budgetStatus?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    budgetStatus?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    budgetStatus?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumBudgetStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetStatus | EnumBudgetStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BudgetStatus[] | ListEnumBudgetStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BudgetStatus[] | ListEnumBudgetStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBudgetStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BudgetStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBudgetStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBudgetStatusNullableFilter<$PrismaModel>
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    paymentType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    paymentType?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sessionTime?: SortOrder
    repeatsWeekly?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    sessionTime?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sessionTime?: SortOrder
    repeatsWeekly?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sessionTime?: SortOrder
    repeatsWeekly?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    sessionTime?: SortOrder
  }

  export type EnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type LegalGuardianCreateNestedOneWithoutUserInput = {
    create?: XOR<LegalGuardianCreateWithoutUserInput, LegalGuardianUncheckedCreateWithoutUserInput>
    connectOrCreate?: LegalGuardianCreateOrConnectWithoutUserInput
    connect?: LegalGuardianWhereUniqueInput
  }

  export type ProfessionalCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ProcessCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProcessCreateWithoutCreatedByInput, ProcessUncheckedCreateWithoutCreatedByInput> | ProcessCreateWithoutCreatedByInput[] | ProcessUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutCreatedByInput | ProcessCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProcessCreateManyCreatedByInputEnvelope
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type LegalGuardianUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LegalGuardianCreateWithoutUserInput, LegalGuardianUncheckedCreateWithoutUserInput>
    connectOrCreate?: LegalGuardianCreateOrConnectWithoutUserInput
    connect?: LegalGuardianWhereUniqueInput
  }

  export type ProfessionalUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ProcessUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProcessCreateWithoutCreatedByInput, ProcessUncheckedCreateWithoutCreatedByInput> | ProcessCreateWithoutCreatedByInput[] | ProcessUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutCreatedByInput | ProcessCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProcessCreateManyCreatedByInputEnvelope
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRolesFieldUpdateOperationsInput = {
    set?: $Enums.UserRoles
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type LegalGuardianUpdateOneWithoutUserNestedInput = {
    create?: XOR<LegalGuardianCreateWithoutUserInput, LegalGuardianUncheckedCreateWithoutUserInput>
    connectOrCreate?: LegalGuardianCreateOrConnectWithoutUserInput
    upsert?: LegalGuardianUpsertWithoutUserInput
    disconnect?: LegalGuardianWhereInput | boolean
    delete?: LegalGuardianWhereInput | boolean
    connect?: LegalGuardianWhereUniqueInput
    update?: XOR<XOR<LegalGuardianUpdateToOneWithWhereWithoutUserInput, LegalGuardianUpdateWithoutUserInput>, LegalGuardianUncheckedUpdateWithoutUserInput>
  }

  export type ProfessionalUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput
    upsert?: ProfessionalUpsertWithoutUserInput
    disconnect?: ProfessionalWhereInput | boolean
    delete?: ProfessionalWhereInput | boolean
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutUserInput, ProfessionalUpdateWithoutUserInput>, ProfessionalUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ProcessUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProcessCreateWithoutCreatedByInput, ProcessUncheckedCreateWithoutCreatedByInput> | ProcessCreateWithoutCreatedByInput[] | ProcessUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutCreatedByInput | ProcessCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProcessUpsertWithWhereUniqueWithoutCreatedByInput | ProcessUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProcessCreateManyCreatedByInputEnvelope
    set?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    disconnect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    delete?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    update?: ProcessUpdateWithWhereUniqueWithoutCreatedByInput | ProcessUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProcessUpdateManyWithWhereWithoutCreatedByInput | ProcessUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type LegalGuardianUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LegalGuardianCreateWithoutUserInput, LegalGuardianUncheckedCreateWithoutUserInput>
    connectOrCreate?: LegalGuardianCreateOrConnectWithoutUserInput
    upsert?: LegalGuardianUpsertWithoutUserInput
    disconnect?: LegalGuardianWhereInput | boolean
    delete?: LegalGuardianWhereInput | boolean
    connect?: LegalGuardianWhereUniqueInput
    update?: XOR<XOR<LegalGuardianUpdateToOneWithWhereWithoutUserInput, LegalGuardianUpdateWithoutUserInput>, LegalGuardianUncheckedUpdateWithoutUserInput>
  }

  export type ProfessionalUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput
    upsert?: ProfessionalUpsertWithoutUserInput
    disconnect?: ProfessionalWhereInput | boolean
    delete?: ProfessionalWhereInput | boolean
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutUserInput, ProfessionalUpdateWithoutUserInput>, ProfessionalUncheckedUpdateWithoutUserInput>
  }

  export type EventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ProcessUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProcessCreateWithoutCreatedByInput, ProcessUncheckedCreateWithoutCreatedByInput> | ProcessCreateWithoutCreatedByInput[] | ProcessUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutCreatedByInput | ProcessCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProcessUpsertWithWhereUniqueWithoutCreatedByInput | ProcessUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProcessCreateManyCreatedByInputEnvelope
    set?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    disconnect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    delete?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    update?: ProcessUpdateWithWhereUniqueWithoutCreatedByInput | ProcessUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProcessUpdateManyWithWhereWithoutCreatedByInput | ProcessUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type LegalGuardianCreateNestedOneWithoutPatientsInput = {
    create?: XOR<LegalGuardianCreateWithoutPatientsInput, LegalGuardianUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: LegalGuardianCreateOrConnectWithoutPatientsInput
    connect?: LegalGuardianWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutPatientInput = {
    create?: XOR<EventCreateWithoutPatientInput, EventUncheckedCreateWithoutPatientInput> | EventCreateWithoutPatientInput[] | EventUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPatientInput | EventCreateOrConnectWithoutPatientInput[]
    createMany?: EventCreateManyPatientInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type AdmissionCreateNestedOneWithoutPatientInput = {
    create?: XOR<AdmissionCreateWithoutPatientInput, AdmissionUncheckedCreateWithoutPatientInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutPatientInput
    connect?: AdmissionWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<EventCreateWithoutPatientInput, EventUncheckedCreateWithoutPatientInput> | EventCreateWithoutPatientInput[] | EventUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPatientInput | EventCreateOrConnectWithoutPatientInput[]
    createMany?: EventCreateManyPatientInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type AdmissionUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<AdmissionCreateWithoutPatientInput, AdmissionUncheckedCreateWithoutPatientInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutPatientInput
    connect?: AdmissionWhereUniqueInput
  }

  export type NullableEnumPatientTypeFieldUpdateOperationsInput = {
    set?: $Enums.PatientType | null
  }

  export type NullableEnumPatientStatusFieldUpdateOperationsInput = {
    set?: $Enums.PatientStatus | null
  }

  export type UserUpdateOneWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type LegalGuardianUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<LegalGuardianCreateWithoutPatientsInput, LegalGuardianUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: LegalGuardianCreateOrConnectWithoutPatientsInput
    upsert?: LegalGuardianUpsertWithoutPatientsInput
    disconnect?: LegalGuardianWhereInput | boolean
    delete?: LegalGuardianWhereInput | boolean
    connect?: LegalGuardianWhereUniqueInput
    update?: XOR<XOR<LegalGuardianUpdateToOneWithWhereWithoutPatientsInput, LegalGuardianUpdateWithoutPatientsInput>, LegalGuardianUncheckedUpdateWithoutPatientsInput>
  }

  export type EventUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EventCreateWithoutPatientInput, EventUncheckedCreateWithoutPatientInput> | EventCreateWithoutPatientInput[] | EventUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPatientInput | EventCreateOrConnectWithoutPatientInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPatientInput | EventUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EventCreateManyPatientInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPatientInput | EventUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPatientInput | EventUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type AdmissionUpdateOneWithoutPatientNestedInput = {
    create?: XOR<AdmissionCreateWithoutPatientInput, AdmissionUncheckedCreateWithoutPatientInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutPatientInput
    upsert?: AdmissionUpsertWithoutPatientInput
    disconnect?: AdmissionWhereInput | boolean
    delete?: AdmissionWhereInput | boolean
    connect?: AdmissionWhereUniqueInput
    update?: XOR<XOR<AdmissionUpdateToOneWithWhereWithoutPatientInput, AdmissionUpdateWithoutPatientInput>, AdmissionUncheckedUpdateWithoutPatientInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EventCreateWithoutPatientInput, EventUncheckedCreateWithoutPatientInput> | EventCreateWithoutPatientInput[] | EventUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EventCreateOrConnectWithoutPatientInput | EventCreateOrConnectWithoutPatientInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutPatientInput | EventUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EventCreateManyPatientInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutPatientInput | EventUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EventUpdateManyWithWhereWithoutPatientInput | EventUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type AdmissionUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<AdmissionCreateWithoutPatientInput, AdmissionUncheckedCreateWithoutPatientInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutPatientInput
    upsert?: AdmissionUpsertWithoutPatientInput
    disconnect?: AdmissionWhereInput | boolean
    delete?: AdmissionWhereInput | boolean
    connect?: AdmissionWhereUniqueInput
    update?: XOR<XOR<AdmissionUpdateToOneWithWhereWithoutPatientInput, AdmissionUpdateWithoutPatientInput>, AdmissionUncheckedUpdateWithoutPatientInput>
  }

  export type UserCreateNestedOneWithoutLegalGuardianInput = {
    create?: XOR<UserCreateWithoutLegalGuardianInput, UserUncheckedCreateWithoutLegalGuardianInput>
    connectOrCreate?: UserCreateOrConnectWithoutLegalGuardianInput
    connect?: UserWhereUniqueInput
  }

  export type PatientCreateNestedManyWithoutLegalGuardianInput = {
    create?: XOR<PatientCreateWithoutLegalGuardianInput, PatientUncheckedCreateWithoutLegalGuardianInput> | PatientCreateWithoutLegalGuardianInput[] | PatientUncheckedCreateWithoutLegalGuardianInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLegalGuardianInput | PatientCreateOrConnectWithoutLegalGuardianInput[]
    createMany?: PatientCreateManyLegalGuardianInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutLegalGuardianInput = {
    create?: XOR<PatientCreateWithoutLegalGuardianInput, PatientUncheckedCreateWithoutLegalGuardianInput> | PatientCreateWithoutLegalGuardianInput[] | PatientUncheckedCreateWithoutLegalGuardianInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLegalGuardianInput | PatientCreateOrConnectWithoutLegalGuardianInput[]
    createMany?: PatientCreateManyLegalGuardianInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type NullableEnumLegalGuardianTypeFieldUpdateOperationsInput = {
    set?: $Enums.LegalGuardianType | null
  }

  export type NullableEnumLegalGuardianStatusFieldUpdateOperationsInput = {
    set?: $Enums.LegalGuardianStatus | null
  }

  export type UserUpdateOneWithoutLegalGuardianNestedInput = {
    create?: XOR<UserCreateWithoutLegalGuardianInput, UserUncheckedCreateWithoutLegalGuardianInput>
    connectOrCreate?: UserCreateOrConnectWithoutLegalGuardianInput
    upsert?: UserUpsertWithoutLegalGuardianInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLegalGuardianInput, UserUpdateWithoutLegalGuardianInput>, UserUncheckedUpdateWithoutLegalGuardianInput>
  }

  export type PatientUpdateManyWithoutLegalGuardianNestedInput = {
    create?: XOR<PatientCreateWithoutLegalGuardianInput, PatientUncheckedCreateWithoutLegalGuardianInput> | PatientCreateWithoutLegalGuardianInput[] | PatientUncheckedCreateWithoutLegalGuardianInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLegalGuardianInput | PatientCreateOrConnectWithoutLegalGuardianInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutLegalGuardianInput | PatientUpsertWithWhereUniqueWithoutLegalGuardianInput[]
    createMany?: PatientCreateManyLegalGuardianInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutLegalGuardianInput | PatientUpdateWithWhereUniqueWithoutLegalGuardianInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutLegalGuardianInput | PatientUpdateManyWithWhereWithoutLegalGuardianInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutLegalGuardianNestedInput = {
    create?: XOR<PatientCreateWithoutLegalGuardianInput, PatientUncheckedCreateWithoutLegalGuardianInput> | PatientCreateWithoutLegalGuardianInput[] | PatientUncheckedCreateWithoutLegalGuardianInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLegalGuardianInput | PatientCreateOrConnectWithoutLegalGuardianInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutLegalGuardianInput | PatientUpsertWithWhereUniqueWithoutLegalGuardianInput[]
    createMany?: PatientCreateManyLegalGuardianInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutLegalGuardianInput | PatientUpdateWithWhereUniqueWithoutLegalGuardianInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutLegalGuardianInput | PatientUpdateManyWithWhereWithoutLegalGuardianInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfessionalInput = {
    create?: XOR<UserCreateWithoutProfessionalInput, UserUncheckedCreateWithoutProfessionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<EventCreateWithoutProfessionalInput, EventUncheckedCreateWithoutProfessionalInput> | EventCreateWithoutProfessionalInput[] | EventUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProfessionalInput | EventCreateOrConnectWithoutProfessionalInput[]
    createMany?: EventCreateManyProfessionalInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput> | ScheduleCreateWithoutProfessionalInput[] | ScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProfessionalInput | ScheduleCreateOrConnectWithoutProfessionalInput[]
    createMany?: ScheduleCreateManyProfessionalInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<EventCreateWithoutProfessionalInput, EventUncheckedCreateWithoutProfessionalInput> | EventCreateWithoutProfessionalInput[] | EventUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProfessionalInput | EventCreateOrConnectWithoutProfessionalInput[]
    createMany?: EventCreateManyProfessionalInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput> | ScheduleCreateWithoutProfessionalInput[] | ScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProfessionalInput | ScheduleCreateOrConnectWithoutProfessionalInput[]
    createMany?: ScheduleCreateManyProfessionalInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutProfessionalNestedInput = {
    create?: XOR<UserCreateWithoutProfessionalInput, UserUncheckedCreateWithoutProfessionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalInput
    upsert?: UserUpsertWithoutProfessionalInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfessionalInput, UserUpdateWithoutProfessionalInput>, UserUncheckedUpdateWithoutProfessionalInput>
  }

  export type EventUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<EventCreateWithoutProfessionalInput, EventUncheckedCreateWithoutProfessionalInput> | EventCreateWithoutProfessionalInput[] | EventUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProfessionalInput | EventCreateOrConnectWithoutProfessionalInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutProfessionalInput | EventUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: EventCreateManyProfessionalInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutProfessionalInput | EventUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: EventUpdateManyWithWhereWithoutProfessionalInput | EventUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput> | ScheduleCreateWithoutProfessionalInput[] | ScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProfessionalInput | ScheduleCreateOrConnectWithoutProfessionalInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutProfessionalInput | ScheduleUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ScheduleCreateManyProfessionalInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutProfessionalInput | ScheduleUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutProfessionalInput | ScheduleUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<EventCreateWithoutProfessionalInput, EventUncheckedCreateWithoutProfessionalInput> | EventCreateWithoutProfessionalInput[] | EventUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: EventCreateOrConnectWithoutProfessionalInput | EventCreateOrConnectWithoutProfessionalInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutProfessionalInput | EventUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: EventCreateManyProfessionalInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutProfessionalInput | EventUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: EventUpdateManyWithWhereWithoutProfessionalInput | EventUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput> | ScheduleCreateWithoutProfessionalInput[] | ScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutProfessionalInput | ScheduleCreateOrConnectWithoutProfessionalInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutProfessionalInput | ScheduleUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ScheduleCreateManyProfessionalInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutProfessionalInput | ScheduleUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutProfessionalInput | ScheduleUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutAdmissionInput = {
    create?: XOR<PatientCreateWithoutAdmissionInput, PatientUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAdmissionInput
    connect?: PatientWhereUniqueInput
  }

  export type NullableEnumAdmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdmissionStatus | null
  }

  export type PatientUpdateOneRequiredWithoutAdmissionNestedInput = {
    create?: XOR<PatientCreateWithoutAdmissionInput, PatientUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAdmissionInput
    upsert?: PatientUpsertWithoutAdmissionInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAdmissionInput, PatientUpdateWithoutAdmissionInput>, PatientUncheckedUpdateWithoutAdmissionInput>
  }

  export type UserCreateNestedOneWithoutCreatedEventsInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type ProfessionalCreateNestedOneWithoutEventsInput = {
    create?: XOR<ProfessionalCreateWithoutEventsInput, ProfessionalUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutEventsInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutEventsInput = {
    create?: XOR<PatientCreateWithoutEventsInput, PatientUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEventsInput
    connect?: PatientWhereUniqueInput
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type UserUpdateOneRequiredWithoutCreatedEventsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    upsert?: UserUpsertWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedEventsInput, UserUpdateWithoutCreatedEventsInput>, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type ProfessionalUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ProfessionalCreateWithoutEventsInput, ProfessionalUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutEventsInput
    upsert?: ProfessionalUpsertWithoutEventsInput
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutEventsInput, ProfessionalUpdateWithoutEventsInput>, ProfessionalUncheckedUpdateWithoutEventsInput>
  }

  export type PatientUpdateOneWithoutEventsNestedInput = {
    create?: XOR<PatientCreateWithoutEventsInput, PatientUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEventsInput
    upsert?: PatientUpsertWithoutEventsInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutEventsInput, PatientUpdateWithoutEventsInput>, PatientUncheckedUpdateWithoutEventsInput>
  }

  export type UserCreateNestedOneWithoutCreatedProcessesInput = {
    create?: XOR<UserCreateWithoutCreatedProcessesInput, UserUncheckedCreateWithoutCreatedProcessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProcessesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProcessTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProcessType
  }

  export type EnumProcessStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProcessStatus
  }

  export type UserUpdateOneRequiredWithoutCreatedProcessesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedProcessesInput, UserUncheckedCreateWithoutCreatedProcessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProcessesInput
    upsert?: UserUpsertWithoutCreatedProcessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedProcessesInput, UserUpdateWithoutCreatedProcessesInput>, UserUncheckedUpdateWithoutCreatedProcessesInput>
  }

  export type NullableEnumBudgetStatusFieldUpdateOperationsInput = {
    set?: $Enums.BudgetStatus | null
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type ProfessionalCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ProfessionalCreateWithoutSchedulesInput, ProfessionalUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutSchedulesInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type EnumWeekDayFieldUpdateOperationsInput = {
    set?: $Enums.WeekDay
  }

  export type ProfessionalUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ProfessionalCreateWithoutSchedulesInput, ProfessionalUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutSchedulesInput
    upsert?: ProfessionalUpsertWithoutSchedulesInput
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutSchedulesInput, ProfessionalUpdateWithoutSchedulesInput>, ProfessionalUncheckedUpdateWithoutSchedulesInput>
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

  export type NestedEnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPatientTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientType | EnumPatientTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PatientType[] | ListEnumPatientTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PatientType[] | ListEnumPatientTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPatientTypeNullableFilter<$PrismaModel> | $Enums.PatientType | null
  }

  export type NestedEnumPatientStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPatientStatusNullableFilter<$PrismaModel> | $Enums.PatientStatus | null
  }

  export type NestedEnumPatientTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientType | EnumPatientTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.PatientType[] | ListEnumPatientTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PatientType[] | ListEnumPatientTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPatientTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.PatientType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPatientTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumPatientTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPatientStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPatientStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PatientStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPatientStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPatientStatusNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumLegalGuardianTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalGuardianType | EnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LegalGuardianType[] | ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LegalGuardianType[] | ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLegalGuardianTypeNullableFilter<$PrismaModel> | $Enums.LegalGuardianType | null
  }

  export type NestedEnumLegalGuardianStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalGuardianStatus | EnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LegalGuardianStatus[] | ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LegalGuardianStatus[] | ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLegalGuardianStatusNullableFilter<$PrismaModel> | $Enums.LegalGuardianStatus | null
  }

  export type NestedEnumLegalGuardianTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalGuardianType | EnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LegalGuardianType[] | ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LegalGuardianType[] | ListEnumLegalGuardianTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLegalGuardianTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LegalGuardianType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLegalGuardianTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumLegalGuardianTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLegalGuardianStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LegalGuardianStatus | EnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LegalGuardianStatus[] | ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LegalGuardianStatus[] | ListEnumLegalGuardianStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLegalGuardianStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.LegalGuardianStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLegalGuardianStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumLegalGuardianStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdmissionStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdmissionStatusNullableFilter<$PrismaModel> | $Enums.AdmissionStatus | null
  }

  export type NestedEnumAdmissionStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAdmissionStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAdmissionStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAdmissionStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedEnumProcessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeFilter<$PrismaModel> | $Enums.ProcessType
  }

  export type NestedEnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus
  }

  export type NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessType | EnumProcessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessType[] | ListEnumProcessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProcessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessTypeFilter<$PrismaModel>
    _max?: NestedEnumProcessTypeFilter<$PrismaModel>
  }

  export type NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessStatusFilter<$PrismaModel>
  }

  export type NestedEnumBudgetStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetStatus | EnumBudgetStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BudgetStatus[] | ListEnumBudgetStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BudgetStatus[] | ListEnumBudgetStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBudgetStatusNullableFilter<$PrismaModel> | $Enums.BudgetStatus | null
  }

  export type NestedEnumBudgetStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BudgetStatus | EnumBudgetStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BudgetStatus[] | ListEnumBudgetStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BudgetStatus[] | ListEnumBudgetStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBudgetStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BudgetStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBudgetStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBudgetStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumWeekDayFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayFilter<$PrismaModel> | $Enums.WeekDay
  }

  export type NestedEnumWeekDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeekDay | EnumWeekDayFieldRefInput<$PrismaModel>
    in?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeekDay[] | ListEnumWeekDayFieldRefInput<$PrismaModel>
    not?: NestedEnumWeekDayWithAggregatesFilter<$PrismaModel> | $Enums.WeekDay
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeekDayFilter<$PrismaModel>
    _max?: NestedEnumWeekDayFilter<$PrismaModel>
  }

  export type PatientCreateWithoutUserInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    legalGuardian?: LegalGuardianCreateNestedOneWithoutPatientsInput
    events?: EventCreateNestedManyWithoutPatientInput
    admission?: AdmissionCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    legalGuardianId?: number | null
    events?: EventUncheckedCreateNestedManyWithoutPatientInput
    admission?: AdmissionUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type LegalGuardianCreateWithoutUserInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    legalGuardianType?: $Enums.LegalGuardianType | null
    legalGuardianStatus?: $Enums.LegalGuardianStatus | null
    isActive?: boolean
    createdAt?: Date | string
    patients?: PatientCreateNestedManyWithoutLegalGuardianInput
  }

  export type LegalGuardianUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    legalGuardianType?: $Enums.LegalGuardianType | null
    legalGuardianStatus?: $Enums.LegalGuardianStatus | null
    isActive?: boolean
    createdAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutLegalGuardianInput
  }

  export type LegalGuardianCreateOrConnectWithoutUserInput = {
    where: LegalGuardianWhereUniqueInput
    create: XOR<LegalGuardianCreateWithoutUserInput, LegalGuardianUncheckedCreateWithoutUserInput>
  }

  export type ProfessionalCreateWithoutUserInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    events?: EventCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    events?: EventUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutUserInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
  }

  export type EventCreateWithoutCreatedByInput = {
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    professional: ProfessionalCreateNestedOneWithoutEventsInput
    patient?: PatientCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    professionalId: number
    patientId?: number | null
  }

  export type EventCreateOrConnectWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventCreateManyCreatedByInputEnvelope = {
    data: EventCreateManyCreatedByInput | EventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProcessCreateWithoutCreatedByInput = {
    title: string
    description?: string | null
    processType: $Enums.ProcessType
    processStatus: $Enums.ProcessStatus
    createdAt?: Date | string
  }

  export type ProcessUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    processType: $Enums.ProcessType
    processStatus: $Enums.ProcessStatus
    createdAt?: Date | string
  }

  export type ProcessCreateOrConnectWithoutCreatedByInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutCreatedByInput, ProcessUncheckedCreateWithoutCreatedByInput>
  }

  export type ProcessCreateManyCreatedByInputEnvelope = {
    data: ProcessCreateManyCreatedByInput | ProcessCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalGuardian?: LegalGuardianUpdateOneWithoutPatientsNestedInput
    events?: EventUpdateManyWithoutPatientNestedInput
    admission?: AdmissionUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legalGuardianId?: NullableIntFieldUpdateOperationsInput | number | null
    events?: EventUncheckedUpdateManyWithoutPatientNestedInput
    admission?: AdmissionUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type LegalGuardianUpsertWithoutUserInput = {
    update: XOR<LegalGuardianUpdateWithoutUserInput, LegalGuardianUncheckedUpdateWithoutUserInput>
    create: XOR<LegalGuardianCreateWithoutUserInput, LegalGuardianUncheckedCreateWithoutUserInput>
    where?: LegalGuardianWhereInput
  }

  export type LegalGuardianUpdateToOneWithWhereWithoutUserInput = {
    where?: LegalGuardianWhereInput
    data: XOR<LegalGuardianUpdateWithoutUserInput, LegalGuardianUncheckedUpdateWithoutUserInput>
  }

  export type LegalGuardianUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardianType?: NullableEnumLegalGuardianTypeFieldUpdateOperationsInput | $Enums.LegalGuardianType | null
    legalGuardianStatus?: NullableEnumLegalGuardianStatusFieldUpdateOperationsInput | $Enums.LegalGuardianStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutLegalGuardianNestedInput
  }

  export type LegalGuardianUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardianType?: NullableEnumLegalGuardianTypeFieldUpdateOperationsInput | $Enums.LegalGuardianType | null
    legalGuardianStatus?: NullableEnumLegalGuardianStatusFieldUpdateOperationsInput | $Enums.LegalGuardianStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutLegalGuardianNestedInput
  }

  export type ProfessionalUpsertWithoutUserInput = {
    update: XOR<ProfessionalUpdateWithoutUserInput, ProfessionalUncheckedUpdateWithoutUserInput>
    create: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutUserInput, ProfessionalUncheckedUpdateWithoutUserInput>
  }

  export type ProfessionalUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
  }

  export type EventUpdateManyWithWhereWithoutCreatedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startEvent?: DateTimeFilter<"Event"> | Date | string
    endEvent?: DateTimeFilter<"Event"> | Date | string
    eventType?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    createdAt?: DateTimeFilter<"Event"> | Date | string
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    createdById?: IntFilter<"Event"> | number
    professionalId?: IntFilter<"Event"> | number
    patientId?: IntNullableFilter<"Event"> | number | null
  }

  export type ProcessUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProcessWhereUniqueInput
    update: XOR<ProcessUpdateWithoutCreatedByInput, ProcessUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProcessCreateWithoutCreatedByInput, ProcessUncheckedCreateWithoutCreatedByInput>
  }

  export type ProcessUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProcessWhereUniqueInput
    data: XOR<ProcessUpdateWithoutCreatedByInput, ProcessUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProcessUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProcessScalarWhereInput
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProcessScalarWhereInput = {
    AND?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
    OR?: ProcessScalarWhereInput[]
    NOT?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
    id?: IntFilter<"Process"> | number
    title?: StringFilter<"Process"> | string
    description?: StringNullableFilter<"Process"> | string | null
    processType?: EnumProcessTypeFilter<"Process"> | $Enums.ProcessType
    processStatus?: EnumProcessStatusFilter<"Process"> | $Enums.ProcessStatus
    createdAt?: DateTimeFilter<"Process"> | Date | string
    createdById?: IntFilter<"Process"> | number
  }

  export type UserCreateWithoutPatientInput = {
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    legalGuardian?: LegalGuardianCreateNestedOneWithoutUserInput
    professional?: ProfessionalCreateNestedOneWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    createdProcesses?: ProcessCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: number
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    legalGuardian?: LegalGuardianUncheckedCreateNestedOneWithoutUserInput
    professional?: ProfessionalUncheckedCreateNestedOneWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    createdProcesses?: ProcessUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type LegalGuardianCreateWithoutPatientsInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    legalGuardianType?: $Enums.LegalGuardianType | null
    legalGuardianStatus?: $Enums.LegalGuardianStatus | null
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutLegalGuardianInput
  }

  export type LegalGuardianUncheckedCreateWithoutPatientsInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    legalGuardianType?: $Enums.LegalGuardianType | null
    legalGuardianStatus?: $Enums.LegalGuardianStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
  }

  export type LegalGuardianCreateOrConnectWithoutPatientsInput = {
    where: LegalGuardianWhereUniqueInput
    create: XOR<LegalGuardianCreateWithoutPatientsInput, LegalGuardianUncheckedCreateWithoutPatientsInput>
  }

  export type EventCreateWithoutPatientInput = {
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    professional: ProfessionalCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutPatientInput = {
    id?: number
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdById: number
    professionalId: number
  }

  export type EventCreateOrConnectWithoutPatientInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPatientInput, EventUncheckedCreateWithoutPatientInput>
  }

  export type EventCreateManyPatientInputEnvelope = {
    data: EventCreateManyPatientInput | EventCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AdmissionCreateWithoutPatientInput = {
    admissionStatus?: $Enums.AdmissionStatus | null
  }

  export type AdmissionUncheckedCreateWithoutPatientInput = {
    id?: number
    admissionStatus?: $Enums.AdmissionStatus | null
  }

  export type AdmissionCreateOrConnectWithoutPatientInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutPatientInput, AdmissionUncheckedCreateWithoutPatientInput>
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardian?: LegalGuardianUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUpdateOneWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    createdProcesses?: ProcessUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardian?: LegalGuardianUncheckedUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUncheckedUpdateOneWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    createdProcesses?: ProcessUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type LegalGuardianUpsertWithoutPatientsInput = {
    update: XOR<LegalGuardianUpdateWithoutPatientsInput, LegalGuardianUncheckedUpdateWithoutPatientsInput>
    create: XOR<LegalGuardianCreateWithoutPatientsInput, LegalGuardianUncheckedCreateWithoutPatientsInput>
    where?: LegalGuardianWhereInput
  }

  export type LegalGuardianUpdateToOneWithWhereWithoutPatientsInput = {
    where?: LegalGuardianWhereInput
    data: XOR<LegalGuardianUpdateWithoutPatientsInput, LegalGuardianUncheckedUpdateWithoutPatientsInput>
  }

  export type LegalGuardianUpdateWithoutPatientsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardianType?: NullableEnumLegalGuardianTypeFieldUpdateOperationsInput | $Enums.LegalGuardianType | null
    legalGuardianStatus?: NullableEnumLegalGuardianStatusFieldUpdateOperationsInput | $Enums.LegalGuardianStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLegalGuardianNestedInput
  }

  export type LegalGuardianUncheckedUpdateWithoutPatientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    legalGuardianType?: NullableEnumLegalGuardianTypeFieldUpdateOperationsInput | $Enums.LegalGuardianType | null
    legalGuardianStatus?: NullableEnumLegalGuardianStatusFieldUpdateOperationsInput | $Enums.LegalGuardianStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventUpsertWithWhereUniqueWithoutPatientInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutPatientInput, EventUncheckedUpdateWithoutPatientInput>
    create: XOR<EventCreateWithoutPatientInput, EventUncheckedCreateWithoutPatientInput>
  }

  export type EventUpdateWithWhereUniqueWithoutPatientInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutPatientInput, EventUncheckedUpdateWithoutPatientInput>
  }

  export type EventUpdateManyWithWhereWithoutPatientInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutPatientInput>
  }

  export type AdmissionUpsertWithoutPatientInput = {
    update: XOR<AdmissionUpdateWithoutPatientInput, AdmissionUncheckedUpdateWithoutPatientInput>
    create: XOR<AdmissionCreateWithoutPatientInput, AdmissionUncheckedCreateWithoutPatientInput>
    where?: AdmissionWhereInput
  }

  export type AdmissionUpdateToOneWithWhereWithoutPatientInput = {
    where?: AdmissionWhereInput
    data: XOR<AdmissionUpdateWithoutPatientInput, AdmissionUncheckedUpdateWithoutPatientInput>
  }

  export type AdmissionUpdateWithoutPatientInput = {
    admissionStatus?: NullableEnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus | null
  }

  export type AdmissionUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionStatus?: NullableEnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus | null
  }

  export type UserCreateWithoutLegalGuardianInput = {
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientCreateNestedOneWithoutUserInput
    professional?: ProfessionalCreateNestedOneWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    createdProcesses?: ProcessCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutLegalGuardianInput = {
    id?: number
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    professional?: ProfessionalUncheckedCreateNestedOneWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    createdProcesses?: ProcessUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutLegalGuardianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLegalGuardianInput, UserUncheckedCreateWithoutLegalGuardianInput>
  }

  export type PatientCreateWithoutLegalGuardianInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPatientInput
    events?: EventCreateNestedManyWithoutPatientInput
    admission?: AdmissionCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutLegalGuardianInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
    events?: EventUncheckedCreateNestedManyWithoutPatientInput
    admission?: AdmissionUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutLegalGuardianInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutLegalGuardianInput, PatientUncheckedCreateWithoutLegalGuardianInput>
  }

  export type PatientCreateManyLegalGuardianInputEnvelope = {
    data: PatientCreateManyLegalGuardianInput | PatientCreateManyLegalGuardianInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLegalGuardianInput = {
    update: XOR<UserUpdateWithoutLegalGuardianInput, UserUncheckedUpdateWithoutLegalGuardianInput>
    create: XOR<UserCreateWithoutLegalGuardianInput, UserUncheckedCreateWithoutLegalGuardianInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLegalGuardianInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLegalGuardianInput, UserUncheckedUpdateWithoutLegalGuardianInput>
  }

  export type UserUpdateWithoutLegalGuardianInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUpdateOneWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    createdProcesses?: ProcessUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLegalGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUncheckedUpdateOneWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    createdProcesses?: ProcessUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type PatientUpsertWithWhereUniqueWithoutLegalGuardianInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutLegalGuardianInput, PatientUncheckedUpdateWithoutLegalGuardianInput>
    create: XOR<PatientCreateWithoutLegalGuardianInput, PatientUncheckedCreateWithoutLegalGuardianInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutLegalGuardianInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutLegalGuardianInput, PatientUncheckedUpdateWithoutLegalGuardianInput>
  }

  export type PatientUpdateManyWithWhereWithoutLegalGuardianInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutLegalGuardianInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: IntFilter<"Patient"> | number
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    dni?: StringFilter<"Patient"> | string
    cuil?: StringFilter<"Patient"> | string
    dniProcessingNumber?: StringFilter<"Patient"> | string
    birthday?: DateTimeFilter<"Patient"> | Date | string
    phone?: StringFilter<"Patient"> | string
    affiliateNumber?: StringFilter<"Patient"> | string
    professionalActivity?: StringNullableFilter<"Patient"> | string | null
    healthInsuranceProvider?: StringNullableFilter<"Patient"> | string | null
    patientType?: EnumPatientTypeNullableFilter<"Patient"> | $Enums.PatientType | null
    patientStatus?: EnumPatientStatusNullableFilter<"Patient"> | $Enums.PatientStatus | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    userId?: IntNullableFilter<"Patient"> | number | null
    legalGuardianId?: IntNullableFilter<"Patient"> | number | null
  }

  export type UserCreateWithoutProfessionalInput = {
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientCreateNestedOneWithoutUserInput
    legalGuardian?: LegalGuardianCreateNestedOneWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    createdProcesses?: ProcessCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutProfessionalInput = {
    id?: number
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    legalGuardian?: LegalGuardianUncheckedCreateNestedOneWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    createdProcesses?: ProcessUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutProfessionalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessionalInput, UserUncheckedCreateWithoutProfessionalInput>
  }

  export type EventCreateWithoutProfessionalInput = {
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    patient?: PatientCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutProfessionalInput = {
    id?: number
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdById: number
    patientId?: number | null
  }

  export type EventCreateOrConnectWithoutProfessionalInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutProfessionalInput, EventUncheckedCreateWithoutProfessionalInput>
  }

  export type EventCreateManyProfessionalInputEnvelope = {
    data: EventCreateManyProfessionalInput | EventCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutProfessionalInput = {
    dayOfWeek: $Enums.WeekDay
    startTime: string
    endTime: string
    sessionTime?: number
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ScheduleUncheckedCreateWithoutProfessionalInput = {
    id?: number
    dayOfWeek: $Enums.WeekDay
    startTime: string
    endTime: string
    sessionTime?: number
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutProfessionalInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput>
  }

  export type ScheduleCreateManyProfessionalInputEnvelope = {
    data: ScheduleCreateManyProfessionalInput | ScheduleCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfessionalInput = {
    update: XOR<UserUpdateWithoutProfessionalInput, UserUncheckedUpdateWithoutProfessionalInput>
    create: XOR<UserCreateWithoutProfessionalInput, UserUncheckedCreateWithoutProfessionalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfessionalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfessionalInput, UserUncheckedUpdateWithoutProfessionalInput>
  }

  export type UserUpdateWithoutProfessionalInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneWithoutUserNestedInput
    legalGuardian?: LegalGuardianUpdateOneWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    createdProcesses?: ProcessUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    legalGuardian?: LegalGuardianUncheckedUpdateOneWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    createdProcesses?: ProcessUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutProfessionalInput, EventUncheckedUpdateWithoutProfessionalInput>
    create: XOR<EventCreateWithoutProfessionalInput, EventUncheckedCreateWithoutProfessionalInput>
  }

  export type EventUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutProfessionalInput, EventUncheckedUpdateWithoutProfessionalInput>
  }

  export type EventUpdateManyWithWhereWithoutProfessionalInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ScheduleUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutProfessionalInput, ScheduleUncheckedUpdateWithoutProfessionalInput>
    create: XOR<ScheduleCreateWithoutProfessionalInput, ScheduleUncheckedCreateWithoutProfessionalInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutProfessionalInput, ScheduleUncheckedUpdateWithoutProfessionalInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutProfessionalInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    professionalId?: IntFilter<"Schedule"> | number
    dayOfWeek?: EnumWeekDayFilter<"Schedule"> | $Enums.WeekDay
    startTime?: StringFilter<"Schedule"> | string
    endTime?: StringFilter<"Schedule"> | string
    sessionTime?: IntFilter<"Schedule"> | number
    repeatsWeekly?: BoolFilter<"Schedule"> | boolean
    isActive?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type PatientCreateWithoutAdmissionInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPatientInput
    legalGuardian?: LegalGuardianCreateNestedOneWithoutPatientsInput
    events?: EventCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAdmissionInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
    legalGuardianId?: number | null
    events?: EventUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAdmissionInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAdmissionInput, PatientUncheckedCreateWithoutAdmissionInput>
  }

  export type PatientUpsertWithoutAdmissionInput = {
    update: XOR<PatientUpdateWithoutAdmissionInput, PatientUncheckedUpdateWithoutAdmissionInput>
    create: XOR<PatientCreateWithoutAdmissionInput, PatientUncheckedCreateWithoutAdmissionInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAdmissionInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAdmissionInput, PatientUncheckedUpdateWithoutAdmissionInput>
  }

  export type PatientUpdateWithoutAdmissionInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPatientNestedInput
    legalGuardian?: LegalGuardianUpdateOneWithoutPatientsNestedInput
    events?: EventUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAdmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    legalGuardianId?: NullableIntFieldUpdateOperationsInput | number | null
    events?: EventUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutCreatedEventsInput = {
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientCreateNestedOneWithoutUserInput
    legalGuardian?: LegalGuardianCreateNestedOneWithoutUserInput
    professional?: ProfessionalCreateNestedOneWithoutUserInput
    createdProcesses?: ProcessCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedEventsInput = {
    id?: number
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    legalGuardian?: LegalGuardianUncheckedCreateNestedOneWithoutUserInput
    professional?: ProfessionalUncheckedCreateNestedOneWithoutUserInput
    createdProcesses?: ProcessUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
  }

  export type ProfessionalCreateWithoutEventsInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    user?: UserCreateNestedOneWithoutProfessionalInput
    schedules?: ScheduleCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutEventsInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    userId?: number | null
    schedules?: ScheduleUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutEventsInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutEventsInput, ProfessionalUncheckedCreateWithoutEventsInput>
  }

  export type PatientCreateWithoutEventsInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPatientInput
    legalGuardian?: LegalGuardianCreateNestedOneWithoutPatientsInput
    admission?: AdmissionCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutEventsInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
    legalGuardianId?: number | null
    admission?: AdmissionUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutEventsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutEventsInput, PatientUncheckedCreateWithoutEventsInput>
  }

  export type UserUpsertWithoutCreatedEventsInput = {
    update: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type UserUpdateWithoutCreatedEventsInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneWithoutUserNestedInput
    legalGuardian?: LegalGuardianUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUpdateOneWithoutUserNestedInput
    createdProcesses?: ProcessUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    legalGuardian?: LegalGuardianUncheckedUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUncheckedUpdateOneWithoutUserNestedInput
    createdProcesses?: ProcessUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ProfessionalUpsertWithoutEventsInput = {
    update: XOR<ProfessionalUpdateWithoutEventsInput, ProfessionalUncheckedUpdateWithoutEventsInput>
    create: XOR<ProfessionalCreateWithoutEventsInput, ProfessionalUncheckedCreateWithoutEventsInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutEventsInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutEventsInput, ProfessionalUncheckedUpdateWithoutEventsInput>
  }

  export type ProfessionalUpdateWithoutEventsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutProfessionalNestedInput
    schedules?: ScheduleUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    schedules?: ScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type PatientUpsertWithoutEventsInput = {
    update: XOR<PatientUpdateWithoutEventsInput, PatientUncheckedUpdateWithoutEventsInput>
    create: XOR<PatientCreateWithoutEventsInput, PatientUncheckedCreateWithoutEventsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutEventsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutEventsInput, PatientUncheckedUpdateWithoutEventsInput>
  }

  export type PatientUpdateWithoutEventsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPatientNestedInput
    legalGuardian?: LegalGuardianUpdateOneWithoutPatientsNestedInput
    admission?: AdmissionUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    legalGuardianId?: NullableIntFieldUpdateOperationsInput | number | null
    admission?: AdmissionUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type UserCreateWithoutCreatedProcessesInput = {
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientCreateNestedOneWithoutUserInput
    legalGuardian?: LegalGuardianCreateNestedOneWithoutUserInput
    professional?: ProfessionalCreateNestedOneWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedProcessesInput = {
    id?: number
    firebaseUid: string
    role?: $Enums.UserRoles
    email: string
    isActive?: boolean
    createdAt?: Date | string
    image?: string | null
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    legalGuardian?: LegalGuardianUncheckedCreateNestedOneWithoutUserInput
    professional?: ProfessionalUncheckedCreateNestedOneWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedProcessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedProcessesInput, UserUncheckedCreateWithoutCreatedProcessesInput>
  }

  export type UserUpsertWithoutCreatedProcessesInput = {
    update: XOR<UserUpdateWithoutCreatedProcessesInput, UserUncheckedUpdateWithoutCreatedProcessesInput>
    create: XOR<UserCreateWithoutCreatedProcessesInput, UserUncheckedCreateWithoutCreatedProcessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedProcessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedProcessesInput, UserUncheckedUpdateWithoutCreatedProcessesInput>
  }

  export type UserUpdateWithoutCreatedProcessesInput = {
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUpdateOneWithoutUserNestedInput
    legalGuardian?: LegalGuardianUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUpdateOneWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedProcessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firebaseUid?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    legalGuardian?: LegalGuardianUncheckedUpdateOneWithoutUserNestedInput
    professional?: ProfessionalUncheckedUpdateOneWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ProfessionalCreateWithoutSchedulesInput = {
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    user?: UserCreateNestedOneWithoutProfessionalInput
    events?: EventCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutSchedulesInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    birthday: Date | string
    phone: string
    professionalActivity: string
    healthInsuranceProvider?: string | null
    isActive?: boolean
    profecionalType: string
    userId?: number | null
    events?: EventUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutSchedulesInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutSchedulesInput, ProfessionalUncheckedCreateWithoutSchedulesInput>
  }

  export type ProfessionalUpsertWithoutSchedulesInput = {
    update: XOR<ProfessionalUpdateWithoutSchedulesInput, ProfessionalUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ProfessionalCreateWithoutSchedulesInput, ProfessionalUncheckedCreateWithoutSchedulesInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutSchedulesInput, ProfessionalUncheckedUpdateWithoutSchedulesInput>
  }

  export type ProfessionalUpdateWithoutSchedulesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutProfessionalNestedInput
    events?: EventUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    professionalActivity?: StringFieldUpdateOperationsInput | string
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profecionalType?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    events?: EventUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type EventCreateManyCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    professionalId: number
    patientId?: number | null
  }

  export type ProcessCreateManyCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    processType: $Enums.ProcessType
    processStatus: $Enums.ProcessStatus
    createdAt?: Date | string
  }

  export type EventUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    professional?: ProfessionalUpdateOneRequiredWithoutEventsNestedInput
    patient?: PatientUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    professionalId?: IntFieldUpdateOperationsInput | number
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    professionalId?: IntFieldUpdateOperationsInput | number
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProcessUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processType?: EnumProcessTypeFieldUpdateOperationsInput | $Enums.ProcessType
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyPatientInput = {
    id?: number
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdById: number
    professionalId: number
  }

  export type EventUpdateWithoutPatientInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    professional?: ProfessionalUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdById?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
  }

  export type EventUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdById?: IntFieldUpdateOperationsInput | number
    professionalId?: IntFieldUpdateOperationsInput | number
  }

  export type PatientCreateManyLegalGuardianInput = {
    id?: number
    firstName: string
    lastName: string
    address: string
    dni: string
    cuil: string
    dniProcessingNumber: string
    birthday: Date | string
    phone: string
    affiliateNumber: string
    professionalActivity?: string | null
    healthInsuranceProvider?: string | null
    patientType?: $Enums.PatientType | null
    patientStatus?: $Enums.PatientStatus | null
    isActive?: boolean
    createdAt?: Date | string
    userId?: number | null
  }

  export type PatientUpdateWithoutLegalGuardianInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPatientNestedInput
    events?: EventUpdateManyWithoutPatientNestedInput
    admission?: AdmissionUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutLegalGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    events?: EventUncheckedUpdateManyWithoutPatientNestedInput
    admission?: AdmissionUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutLegalGuardianInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    dniProcessingNumber?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    affiliateNumber?: StringFieldUpdateOperationsInput | string
    professionalActivity?: NullableStringFieldUpdateOperationsInput | string | null
    healthInsuranceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    patientType?: NullableEnumPatientTypeFieldUpdateOperationsInput | $Enums.PatientType | null
    patientStatus?: NullableEnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventCreateManyProfessionalInput = {
    id?: number
    title: string
    description?: string | null
    startEvent: Date | string
    endEvent: Date | string
    eventType?: $Enums.EventType
    createdAt?: Date | string
    status?: $Enums.EventStatus
    createdById: number
    patientId?: number | null
  }

  export type ScheduleCreateManyProfessionalInput = {
    id?: number
    dayOfWeek: $Enums.WeekDay
    startTime: string
    endTime: string
    sessionTime?: number
    repeatsWeekly?: boolean
    isActive?: boolean
    createdAt?: Date | string
  }

  export type EventUpdateWithoutProfessionalInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    patient?: PatientUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdById?: IntFieldUpdateOperationsInput | number
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EventUncheckedUpdateManyWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    endEvent?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdById?: IntFieldUpdateOperationsInput | number
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ScheduleUpdateWithoutProfessionalInput = {
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    sessionTime?: IntFieldUpdateOperationsInput | number
    repeatsWeekly?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    sessionTime?: IntFieldUpdateOperationsInput | number
    repeatsWeekly?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyWithoutProfessionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumWeekDayFieldUpdateOperationsInput | $Enums.WeekDay
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    sessionTime?: IntFieldUpdateOperationsInput | number
    repeatsWeekly?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
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