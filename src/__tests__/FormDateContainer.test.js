import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import FormDateContainer from '../components/FormDateContainer'
import FormDate from '../components/FormDate'

// The tests included below, although they do pass, are incomplete
// and meant only to serve as a base for testing (PRs are welcome)

  // Tests Include:
  // Jest Snapshots
  // Does it Crash?

// This article is a good resource for component testing
// https://www.sitepoint.com/test-react-components-jest/

// I do not get tests, and they do not get me.
// Leave testing to those with a knack for it. -KDC (2017)

const overrideObj = {
    fid: 0,
    date: '20170229'
}

// [describe] Optional - For logical grouping

// Can wrap Tests in either [test] or [it]

describe('FormDateContainer:', () => {

    test('Jest Snapshot', () => {
      const component = renderer.create(
        <FormDateContainer formParams={overrideObj} />
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FormDateContainer formParams={overrideObj} />, div)
    })

    // Template below based on (a useful and helpful article):
        // https://medium.freecodecamp.com/the-right-way-to-test-react-components-548a4736ab22
        // https://medium.freecodecamp.com/@suchipi | Stephen Scott

        let props
        let mountedFormDateContainer
        const formDateContainer = () => {
            if (!mountedFormDateContainer) {
                mountedFormDateContainer = mount(
                    <FormDateContainer {...props} />
                    )
            }
            return mountedFormDateContainer
        }

        beforeEach(() => {
            props = {
                formParams: {
                    id: 0,
                    date: '20131021'
                }
            }
            mountedFormDateContainer = undefined
        })

    // All tests will go here

    it("always renders a div", () => {
        const divs = formDateContainer().find("div");
        expect(divs.length).toBeGreaterThan(0);
    })

    it("always renders a `FormDate`", () => {
        expect(formDateContainer().find(FormDate).length).toBe(1)
    })

    describe("when `showNativeDate` is true", () => {
        beforeEach(() => {
            props.showNativeDate = jest.fn()
        })

        it("[Native: True === Native is shown AND 'non-native' is not required]", () => {

            const datePicker = formDateContainer().find(FormDate),
                  isNativeProp = datePicker.props().showNativeDate,
                  isNativeDOM = !datePicker.find(".nativeDatePicker").get(0).style.display.includes('none'),
                  isNonRequired = datePicker.find(".fallbackDatePicker").find("#field-inputYear-0").get(0).hasAttribute('required')

            expect(isNativeProp).toEqual(isNativeDOM)       // Native: True === Native is not display:none (it is shown)
            expect(isNativeProp).not.toEqual(isNonRequired) // Native !== non-native is required
        })

        it("['Native' && field-date-0 === YYYYMMDD]", () => {
            const datePicker = formDateContainer().find(FormDate),
                  isNativeProp = datePicker.props().showNativeDate,
                  getValue = datePicker.find(".nativeDatePicker").find("#field-date-0").get(0).value,
                  getProp1 = datePicker.props().date,               // yyyymmdd
                  getProp2 = datePicker.props().fullDateYearLeft    // yyyy-mm-dd (value used in FormDate)

            if (isNativeProp) {
                expect(getValue).toBe(getProp2)
            }
        })
    })

    describe("when `showNativeDate` is false", () => {
        beforeEach(() => {
            props.showNativeDate = jest.fn()
        })

        it("[Non-native: True === Fallback is shown]", () => {

            const datePicker = formDateContainer().find(FormDate),
                  isNativeProp = datePicker.props().showNativeDate,
                  isNativeDOM = !datePicker.find(".nativeDatePicker").get(0).style.display.includes('none'),
                  isNonRequired = datePicker.find(".fallbackDatePicker").find("#field-inputYear-0").get(0).hasAttribute('required'),
                  isNonNative = !datePicker.find(".fallbackDatePicker").get(0).style.display.includes('none')

            if (isNonNative) {
                expect(!isNativeProp).toEqual(isNonNative)      // Non-native: True === Fallback div is not display:none (it is shown)
            }

            // wrapper.find('input').simulate('keyPress', {key: 'Enter'})
            // input.simulate('change', { target: { value: 'Hello' } })
            // input.simulate('blur');
        })

        it("[Not 'native' === 'non-native' is required]", () => {

            const datePicker = formDateContainer().find(FormDate),
                  isNativeProp = datePicker.props().showNativeDate,
                  isNativeDOM = !datePicker.find(".nativeDatePicker").get(0).style.display.includes('none'),
                  isNonRequired = datePicker.find(".fallbackDatePicker").find("#field-inputYear-0").get(0).hasAttribute('required'),
                  isNonNative = !datePicker.find(".fallbackDatePicker").get(0).style.display.includes('none')

            if (isNonNative) {
                expect(!isNativeProp).toEqual(isNonRequired)    // Not native === non-native is required
            }
        })

        // it("[Not 'native' && field-inputYear-0 === YYYY]", () => {
        //     const datePicker = formDateContainer().find(FormDate),
        //           isNativeProp = datePicker.props().showNativeDate
        //           // getValue = datePicker.find(".fallbackDatePicker").find("#field-inputYear-0").get(0).value,
        //           // getProp = datePicker.props().fullDateYearLeft
        //     // expect(!isNativeProp).toBe(true)
        // })

        // it("[Not 'native' && field-inputMonth-0 === MM]", () => {

        // })

        // it("[Not 'native' && field-inputDay-0 === DD]", () => {

        // })

    })
})