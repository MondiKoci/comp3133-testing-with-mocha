var expect = require('chai').expect;
const calculator = require('../app/calculator')

describe('Calculator', () => {
	describe('Addition', () => {
		it('1 + 1 should equal to 2', () => {
			expect(calculator.add(1, 1)).to.equal(2)
		})
		it('should sum two numbers', () => {
			expect(calculator.add(5, 2)).to.equal(7)
			expect(calculator.add(5, 2)).to.not.equal(8)
		})
	})

	describe('Subtraction', () => {
		it('1 - 1 should equal to 0', () => {
			expect(calculator.sub(1, 1)).to.equal(0)
		})
		it('should subtract two numbers', () => {
			expect(calculator.sub(5,2)).to.equal(3)
			expect(calculator.sub(5,2)).to.not.equal(5)
		})
	})

	describe('Multiplication', () => {
		it('1 * 1 should equal to 1', () => {
			expect(calculator.mul(1, 1)).to.equal(1)
		})
		it('should multiply two numbers', () => {
			expect(calculator.mul(5,2)).to.equal(10)
			expect(calculator.mul(5,2)).to.not.equal(12)
		})
	})

	describe('Division', () => {
		it('1 / 1 should equal to 1', () => {
			expect(calculator.div(1, 1)).to.equal(1)
		})
		it('should divide two numbers', () => {
			expect(calculator.div(10, 2)).to.equal(5)
			expect(calculator.div(10, 2)).to.not.equal(10)
		})
	})
})