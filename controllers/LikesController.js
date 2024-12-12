import LikeModel from '../models/like.js';
import Repository from '../models/repository.js';
import Controller from './Controller.js';
import AccessControl from '../accessControl.js';

export default class LikesController extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new LikeModel()), AccessControl.anonymous());
    }

    like() {
        if (this.repository != null) {

            const isLiked = this.repository.objects().some(
                (like) => like.userId == userId && like.postId == postId
            );

            this.HttpContext.response.JSON({ liked: isLiked });
        }
    }

}