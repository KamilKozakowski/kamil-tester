import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { Author } from '../models/Author';
import { Book } from '../models/Book';
import { ObservableBookControllerApi } from './ObservableAPI';

import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";
export class PromiseBookControllerApi {
    private api: ObservableBookControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BookControllerApiRequestFactory,
        responseProcessor?: BookControllerApiResponseProcessor
    ) {
        this.api = new ObservableBookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getAuthorWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Author>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuthorWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAuthor(_options?: PromiseConfigurationOptions): Promise<Author> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAuthor(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getBookWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Book>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBookWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getBook(_options?: PromiseConfigurationOptions): Promise<Book> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getBook(observableOptions);
        return result.toPromise();
    }


}



