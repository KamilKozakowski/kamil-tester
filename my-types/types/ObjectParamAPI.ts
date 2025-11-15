import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { Author } from '../models/Author';
import { Book } from '../models/Book';

import { ObservableBookControllerApi } from "./ObservableAPI";
import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";

export interface BookControllerApiGetAuthorRequest {
}

export interface BookControllerApiGetBookRequest {
}

export class ObjectBookControllerApi {
    private api: ObservableBookControllerApi

    public constructor(configuration: Configuration, requestFactory?: BookControllerApiRequestFactory, responseProcessor?: BookControllerApiResponseProcessor) {
        this.api = new ObservableBookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getAuthorWithHttpInfo(param: BookControllerApiGetAuthorRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Author>> {
        return this.api.getAuthorWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAuthor(param: BookControllerApiGetAuthorRequest = {}, options?: ConfigurationOptions): Promise<Author> {
        return this.api.getAuthor( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getBookWithHttpInfo(param: BookControllerApiGetBookRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Book>> {
        return this.api.getBookWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getBook(param: BookControllerApiGetBookRequest = {}, options?: ConfigurationOptions): Promise<Book> {
        return this.api.getBook( options).toPromise();
    }

}
