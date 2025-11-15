# .BookControllerApi

All URIs are relative to *http://localhost:52437*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthor**](BookControllerApi.md#getAuthor) | **GET** /author | 
[**getBook**](BookControllerApi.md#getBook) | **GET** /book | 


# **getAuthor**
> Author getAuthor()


### Example


```typescript
import { createConfiguration, BookControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new BookControllerApi(configuration);

const request = {};

const data = await apiInstance.getAuthor(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Author**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBook**
> Book getBook()


### Example


```typescript
import { createConfiguration, BookControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new BookControllerApi(configuration);

const request = {};

const data = await apiInstance.getBook(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Book**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


