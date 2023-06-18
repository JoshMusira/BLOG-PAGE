import sql from 'mssql';
import config from '../db/config.js';

// Create a new todo
export const createUser = async (req, res) => {
    try {
        const { personality } = req.body;
        let pool = await sql.connect(config.sql);
        let insertTodo = await pool.request()
            .input("personality", sql.VarChar, personality) // Insert the personality into the SQL query
            .query("insert into people (personality) values (@personality)"); // Execute the SQL query
        res.status(201).json({ message: 'Todo created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the todo' });
    } finally {
        sql.close();   // Close the SQL connection
    }
};

 // Get all todos
// export const getTodos = async (req, res) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const result = await pool.request().query("select * from people");
//         !result.recordset[0] ? res.status(404).json({ message: 'Todos not found' }) :
//             res.status(200).json(result.recordset);
//     } catch (error) {
//         res.status(201).json({ error: 'an error occurred while retrieving todos' });
//     } finally {
//         sql.close(); // Close the SQL connection
//     }
// };

// // Get a single todo
// export const getTodo = async (req, res) => {
//     try {
//         const { id } = req.params;
//         let pool = await sql.connect(config.sql);
//         const result = await pool.request()
//             .input("todoId", sql.Int, id)
//             .query("select * from people where id = @todoId");
//         !result.recordset[0] ? res.status(404).json({ message: 'Todo not found' }) :
//             res.status(200).json(result.recordset);
//     } catch (error) {
//         // console.log(error);
//         res.status(500).json({ error: 'An error occurred while retrieving todo' });
//     } finally {
//         sql.close();
//     }
// };


// // Update a todo
// export const updateTodo = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { personality } = req.body;
//         let pool = await sql.connect(config.sql);
//         await pool.request()
//             .input("todoId", sql.Int, id)
//             .input("todopersonality", sql.VarChar, personality)
//             .query("UPDATE people SET personality = @todopersonality WHERE id = @todoId");
//         res.status(200).json({ message: 'Todo updated successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred while updating the todo' });
//     } finally {
//         sql.close();
//     }
// };
// // Delete a todo
// export const deleteTodo = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await sql.connect(config.sql);
//         await sql.query`DELETE FROM people WHERE id = ${id}`;
//         res.status(200).json({ message: 'Todo deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred while deleting the todo' });
//     } finally {
//         sql.close();
//     }
// };