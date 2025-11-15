import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Author } from '../models/Author';
import { Book } from '../models/Book';

import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";
export class ObservableBookControllerApi {
    private requestFactory: BookControllerApiRequestFactory;
    private responseProcessor: BookControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BookControllerApiRequestFactory,
        responseProcessor?: BookControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BookControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BookControllerApiResponseProcessor();
    }

    /**
     */
    public getAuthorWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Author>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAuthor(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuthorWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAuthor(_options?: ConfigurationOptions): Observable<Author> {
        return this.getAuthorWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Author>) => apiResponse.data));
    }

    /**
     */
    public getBookWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<Book>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getBook(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBookWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getBook(_options?: ConfigurationOptions): Observable<Book> {
        return this.getBookWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Book>) => apiResponse.data));
    }

}
