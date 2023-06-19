import sql from 'mssql';
import config from '../db/config.js';

// Create a Post

export const createComment = async (req, res) => {
    const { post_id, user_id, content, created_at } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
        await pool.request()
            .input('post_id', sql.VarChar, post_id)
            .input('user_id', sql.VarChar, user_id)
            .input('content', sql.VarChar, content)
            .input('created_at', sql.VarChar, created_at)
            .query('INSERT INTO Comments (post_id,user_id,content, created_at) VALUES (@post_id , @user_id,@content ,@created_at)');
        res.status(200).send({ message: 'Comment created successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while creating a Comment' });
    } finally {
        sql.close();
    }

};

//delete Comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM Comments WHERE comment_id = ${id}`;
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while deleting a Comment' });
    } finally {
        sql.close();
    }
};

//Get all Comments
export const getAllComments = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query("SELECT U.username, C.content AS comment FROM Posts P JOIN Users U ON P.user_id = U.user_id JOIN Comments C ON C.post_id = P.post_id ; ");
        !result.recordset[0] ? res.status(404).json({ message: 'Comment not found' }) :
            res.status(200).json(result.recordset);
    } catch (error) {
        console.log(error)
        res.status(201).json({ error: 'an error occurred while retrieving Comments' });
    } finally {
        sql.close(); // Close the SQL connection
    }
};



