import Combobox from "hw_combobox/models/combobox/base"
import { visible } from "hw_combobox/helpers"

Combobox.Options = Base => class extends Base {
  _resetOptions() {
    this._deselect()
    this.hiddenFieldTarget.name = this.originalNameValue
  }

  get _allowNew() {
    return !!this.nameWhenNewValue
  }

  get _allOptions() {
    return Array.from(this._allOptionElements)
  }

  get _allOptionElements() {
    return this._actingListbox.querySelectorAll(`[${this.filterableAttributeValue}]`)
  }

  get _visibleOptionElements() {
    return [ ...this._allOptionElements ].filter(visible)
  }

  get _selectedOptionElement() {
    return this._actingListbox.querySelector("[role=option][aria-selected=true]")
  }

  get _selectedOptionIndex() {
    return [ ...this._visibleOptionElements ].indexOf(this._selectedOptionElement)
  }

  get _isUnjustifiablyBlank() {
    const valueIsMissing = !this.hiddenFieldTarget.value
    const noBlankOptionSelected = !this._selectedOptionElement

    return valueIsMissing && noBlankOptionSelected
  }
}
