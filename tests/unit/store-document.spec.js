import { expect } from 'chai'
import initialState from '@/store/document/state'
import mutations from '@/store/document/mutations'

const emptyState = () => {
  return {
    objects: {},
    children: [],
    name: '',
    id: 'uuid',
  }
}

describe('VueX - Document', () => {
  describe('State', () => {
    it('initial state is correct', () => {
      expect(initialState.objects).to.be.an('object')
      expect(initialState.name).to.be.a('string')
      expect(initialState.children).to.be.an('array')
      expect(initialState.id).to.be.a('string')
    })
  })

  describe('Mutations', () => {
    it('sets id correctly', () => {
      const state = emptyState()

      mutations.setId(state, 'id')
      expect(state.id).to.equal('id')
    })

    it('sets name correctly', () => {
      const state = emptyState()

      mutations.setName(state, 'Lore')
      expect(state.name).to.equal('Lore')
    })

    it('sets objects correctly', () => {
      const state = emptyState()

      const objects = {}

      mutations.setObjects(state, objects)
      expect(state.objects).to.equal(objects)
    })

    it('adds an object correctly', () => {
      const state = emptyState()

      const newObject = {
        id: 'id',
        type: 'text',
        content: '',
      }

      mutations.addObject(state, newObject)
      expect(state.objects[newObject.id]).to.equal(newObject)
    })

    it('deletes an object correctly', () => {
      const state = emptyState()

      const newObject = {
        id: 'id',
      }

      mutations.addObject(state, newObject)
      mutations.deleteObject(state, newObject.id)
      expect(state.objects).to.not.have.property(newObject.id)
    })

    it('adds a child correctly to the document', () => {
      const state = emptyState()

      const object = {
        id: 'id',
      }

      mutations.setId(state, 'documentId')
      mutations.addObject(state, object)
      mutations.addChild(state, {
        childId: object.id,
        containerId: state.id,
      })

      expect(state.children).to.have.length(1)
      expect(state.children[0]).to.equal(object.id)
    })

    it('adds a child correctly to a container', () => {
      const state = emptyState()

      const container = {
        id: 'container',
        children: [],
      }

      const object = {
        id: 'id',
      }

      mutations.addObject(state, container)
      mutations.addObject(state, object)
      mutations.addChild(state, {
        childId: object.id,
        containerId: container.id,
      })

      expect(state.objects[container.id].children).to.have.length(1)
      expect(state.objects[container.id].children[0]).to.equal(object.id)
    })

    it('inserts a child correctly into the documnet', () => {
      const state = emptyState()
      state.id = 'documentId'
      state.children = ['0', '1', '2']

      mutations.insertChild(state, {
        childId: 'id',
        containerId: 'documentId',
        index: 1,
      })

      expect(state.children).to.have.length(4)
      expect(state.children[1]).to.equal('id')
    })

    it('inserts a child correctly into a container', () => {
      const state = emptyState()
      state.id = 'documentId'
      state.objects = {
        containerId: {
          children: ['0', '1', '2'],
        },
      }

      mutations.insertChild(state, {
        childId: 'id',
        containerId: 'containerId',
        index: 1,
      })

      expect(state.objects['containerId'].children).to.have.length(4)
      expect(state.objects['containerId'].children[1]).to.equal('id')
    })

    it('removes a child correctly from the document', () => {
      const state = emptyState()
      state.id = 'documentId'
      state.children = ['1', '2', '3']

      mutations.removeChild(state, {
        containerId: state.id,
        index: 1,
      })

      expect(state.children).to.have.length(2)
      expect(state.children[0]).to.equal('1')
      expect(state.children[1]).to.equal('3')
    })

    it('removes a child correctly from a container', () => {
      const state = emptyState()

      const container = {
        id: 'containerId',
        children: ['1', '2', '3'],
      }
      state.objects[container.id] = container

      mutations.removeChild(state, {
        containerId: container.id,
        index: 1,
      })

      expect(state.objects['containerId'].children).to.have.length(2)
      expect(state.objects['containerId'].children[0]).to.equal('1')
      expect(state.objects['containerId'].children[1]).to.equal('3')
    })
  })
})
