<template>
  <div style="margin: 50px">
    <json-forms v-bind="{ ajv, renderers, data, schema, uischema, onChange }"/>
  </div>
</template>

<script>
// import { JsonFormsChangeEvent } from '@jsonforms/vue2'
import { JsonForms } from '@jsonforms/vue2'
import { defineComponent, ref } from '@vue/composition-api'
import { createAjv, aotterUIRenderers } from '@aotter/jsonforms-aotter-ui-renderers'

export default defineComponent({
  name: 'app',
  components: { JsonForms },
  setup() {
    const ajv = createAjv()
    const renderers = aotterUIRenderers

    const data = ref({ name: '' })

    const schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        }
      },
      errorMessage: '姓名為必填'
    }

    const uischema = {
      type: 'VerticalLayout',
      elements: [{ type: 'Control', scope: '#/properties/name', options: { placeholder: 'type here...' } }]
    }

    // function onChange(event: JsonFormsChangeEvent) {
    function onChange(event) {
      data.value = event.data
    }

    return {
      ajv,
      renderers,
      data,
      schema,
      uischema,
      onChange,
    }
  }
})
</script>