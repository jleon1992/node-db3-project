const knex = require('knex')
const db = require('../data/db-config')


  module.exports = {
      find,
      findById,
      findSteps,
      add,
      update,
      remove
  }

  function find() {
      return db('schemes')
  }

  function findById(id) {
      return db('schemes')
        .where({id})
        .first()

  }

  function findSteps(id){
      return db('steps as s')
        .join('schemes', 'schemes.id', 's.scheme_id')
        .select('s.id', 's.step_number', 's.instructions')
        .where('s.scheme_id', id)
  }

  function add(scheme){
    return db('schemes')
        .insert(scheme)
        
  }
  function update(changes, id){
      return db('schemes')
      .where({id})
      .update(changes)
  }

  function remove(id){
      return db('schemes')
      .where('id', id)
      .del()
  }