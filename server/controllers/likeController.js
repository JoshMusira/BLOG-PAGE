import sql from 'mssql';
import config from '../db/config.js';

//Get all like

export const createLike = async (req, res) => {
    const { post_id, user_id, created_at } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
        await pool.request()
            .input('post_id', sql.VarChar, post_id)
            .input('user_id', sql.VarChar, user_id)
            .input('created_at', sql.VarChar, created_at)
        const like = result.recordset[0]
        if (like) {
            res.send('Like only once')
        }
        else {
            await pool.request()
                .input('post_id', sql.VarChar, post_id)
                .input('user_id', sql.VarChar, user_id)
                .input('created_at', sql.VarChar, created_at)
                .query('INSERT INTO Likes (post_id,user_id, created_at) VALUES (@post_id , @user_id ,@created_at)');
        }
        res.status(200).send({ message: 'Like created successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while creating a Like' });
    } finally {
        sql.close();
    }

};
