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
}

const mainApi = new MainApi('https://be-in-touch.vercel.app/');
// const mainApi = new MainApi('http://localhost:3000/');

export default mainApi;
