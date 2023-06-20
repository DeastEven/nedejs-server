import {pool} from '../db.js'

class PostController {
    async createPost(req, res) {
        const {title, description, img} = req.body
        pool.query(`INSERT INTO posts (title, description, img)
                    VALUES ("${title}", "${description}", "${img}")`)
        res.json(title, description, img)
    }

    async getAll(req, res) {
        pool.query(`SELECT *
                    FROM posts`, ((err, result) => {
            console.log(result)
            res.json(result)
        }))
    }

    async getOne(req, res) {
        const id = req.params.id
        pool.query(`SELECT *
                    FROM posts
                    WHERE id = "${id}"`, ((err, result) => {
            console.log(result)
            res.json(result)
        }))
    }

    async updatePost(req, res) {
        const id = req.params.id
        const {title, description, img} = req.body
        pool.query(`UPDATE posts
                    SET title="${title}",
                        description="${description}",
                        img="${img}"
                    WHERE id = "${id}"`, ((err, result) => {
            res.json(result)
            console.log(result)
        }))
    }

    async deletePost(req, res) {
        const id = req.params.id
        pool.query(`DELETE
                    from posts
                    WHERE id = "${id}"`, ((err, result) => {
            res.json(result)
            console.log(result)
        }))
    }
}

export default new PostController()