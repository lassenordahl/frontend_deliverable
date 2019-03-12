import React, { Component } from 'react';
import './../App';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class FeedbackForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			formData: {
				first: '',
				last: '',
				email: '',
				message: ''
			}
		}

		this.handleFormChange = this.handleFormChange.bind(this);
		this.submitFeedback = this.submitFeedback.bind(this);
	}
	
	handleFormChange(e) {
		let formData = Object.assign({}, this.state.formData)
		formData[e.target.name] = e.target.value
		this.setState({
			formData: formData
		});
	}

	submitFeedback() {
		console.log(this.state.formData);
	}

  render() {
		const { formData } = this.state;

    return (
      <div className="feedbackForm">
        <h2 className="formTitle">Feedback</h2>
        <Form className="formInput">
					<Form.Group>
						<Form.Label>First Name</Form.Label>
						<Form.Control 
								required
								value={formData.first}
								name='first'
								onChange={this.handleFormChange}
								placeholder="Peter" 
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name</Form.Label>
						<Form.Control 
								// required
								value={formData.last}
								name='last'
								onChange={this.handleFormChange}
								placeholder="Anteater" 
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control 
									// required
									value={formData.email}
									name='email'
									onChange={this.handleFormChange}
									placeholder="PeterAnteater@uci.edu" 
							/>
						</InputGroup>
					</Form.Group>
					<Form.Group>
						<Form.Label>Message</Form.Label>
						<Form.Control 
							required
							value={formData.message}
							name='message'
							onChange={this.handleFormChange}
							as="textarea" 
							rows="3" 
							maxLength={500}
							placeholder="The boba cost more than 2 dollars :("
						/>
					</Form.Group>
        </Form>
				<div className="formSubmitWrapper centerFlex">
					<Button 
						onClick={this.submitFeedback}
						className="submitButton" 
						variant="primary" 
						size="lg" 
						block
					>
						Submit
					</Button>
				</div>
      </div>
    );
  }
}

export default FeedbackForm;