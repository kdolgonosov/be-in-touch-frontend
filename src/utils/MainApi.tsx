class MainApi {
    constructor(private readonly baseUrl: String) {
        this.baseUrl = baseUrl;
    }

    get headers() {
        return {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
        };
    }
    private getResponseData(res: Response): Promise<any> {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
    private checkRequestStatus(res: Response): Promise<any> | boolean {
        if (!res.ok) {
            Promise.reject(`Ошибка: ${res.status}`);
            return false;
        } else {
            return res.json();
        }
    }
    public signUp(data: Object): Promise<any> {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
        }).then((res) => this.checkRequestStatus(res));
    }

    public signIn(email: String, password: String): Promise<any> {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({ email, password }),
        })
            .then((res) => this.checkRequestStatus(res))
            .then((res) => {
                if (res.token) {
                    localStorage.setItem('jwt', res.token);
                } else {
                    return false;
                }
            });
    }

    public editProfile(data: Object) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(data),
        }).then((res) => this.checkRequestStatus(res));
    }

    public verifyToken() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers,
        }).then((res) => this.getResponseData(res));
    }

    public getUsers() {
        return fetch(`${this.baseUrl}/users`, {
            method: 'GET',
            headers: this.headers,
        }).then((res) => this.getResponseData(res));
    }
    public getUserById(userId: string) {
        return fetch(`${this.baseUrl}/users/${userId}`, {
            method: 'GET',
            headers: this.headers,
        }).then((res) => this.getResponseData(res));
    }
    //КОСТЫЛЬ
    public getFriends() {
        return fetch(`${this.baseUrl}/users/friends`, {
            method: 'GET',
            headers: this.headers,
        }).then((res) => this.getResponseData(res));
    }

    public followUser(id: string) {
        return fetch(`${this.baseUrl}/users`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                id: id,
            }),
        }).then((res) => this.getResponseData(res));
    }
    public unFollowUser(id: string) {
        return fetch(`${this.baseUrl}/users`, {
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify({
                id: id,
            }),
        }).then((res) => this.getResponseData(res));
    }

    public addPost(data: Object): Promise<any> {
        return fetch(`${this.baseUrl}/posts`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
        }).then((res) => this.checkRequestStatus(res));
    }

    public getPosts() {
        return fetch(`${this.baseUrl}/posts`, {
            method: 'GET',
            headers: this.headers,
        }).then((res) => this.getResponseData(res));
    }
    public getPostsTest(page: number) {
        return fetch(`${this.baseUrl}/posts/test?${page}`, {
            method: 'GET',
            headers: this.headers,
        }).then((res) => this.getResponseData(res));
    }
    public getMyPosts() {
        return fetch(`${this.baseUrl}/posts/me`, {
            method: 'GET',
            headers: this.headers,
        }).then((res) => this.getResponseData(res));
    }
    public getUserPosts(userId: string) {
        return fetch(`${this.baseUrl}/posts/${userId}`, {
            method: 'GET',
            headers: this.headers,
        }).then((res) => this.getResponseData(res));
    }
    public changeLikeCardStatus(postId: string, isLiked: boolean) {
        if (isLiked) {
            return fetch(`${this.baseUrl}/posts/${postId}/likes`, {
                method: 'DELETE',
                headers: this.headers,
            }).then((res) => this.getResponseData(res));
        } else {
            return fetch(`${this.baseUrl}/posts/${postId}/likes`, {
                method: 'PUT',
                headers: this.headers,
            }).then((res) => this.getResponseData(res));
        }
    }
    // addMovie({
    //     country,
    //     director,
    //     duration,
    //     year,
    //     description,
    //     image,
    //     trailerLink,
    //     thumbnail,
    //     movieId,
    //     nameRU,
    //     nameEN,
    // }) {
    //     return fetch(`${this._baseUrl}/movies`, {
    //         method: 'POST',
    //         headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    //         body: JSON.stringify({
    //             country,
    //             director,
    //             duration,
    //             year,
    //             description,
    //             image,
    //             trailerLink,
    //             thumbnail,
    //             movieId,
    //             nameRU,
    //             nameEN,
    //         }),
    //     }).then((res) => this._getResponseData(res));
    // }
    // deleteMovie(movieId) {
    //     return fetch(`${this._baseUrl}/movies/${movieId}`, {
    //         method: 'DELETE',
    //         headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    //     }).then((res) => this._getResponseData(res));
    // }
    // getSavedMovies() {
    //     return fetch(`${this._baseUrl}/movies`, {
    //         method: 'GET',
    //         headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    //     }).then((res) => {
    //         return this._checkRequestStatus(res);
    //     });
    // }
}
// let myHeaders = new Headers([['Content-Type', 'application/json']]);
// myHeaders.append('Accept', 'application/json');

const mainApi = new MainApi(
    // url моего бэка
    // baseUrl: 'http://api.movies-explorer.kd.nomoredomains.xyz',
    'http://localhost:3001',
    // myHeaders,
);

export default mainApi;
