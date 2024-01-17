import React from 'react'

class CoursesPage extends React.Component {
    state = {
        course: {
            title: '',
        },
    }

    handleCourseChange = (event) => {
        const course = { ...this.state.course, title: event.target.value }
        this.setState({ course })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.course.title)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>course</h2>
                <h3>Add Course</h3>
                <input
                    type="text"
                    onChange={this.handleCourseChange}
                    value={this.state.course.title}
                />
                <input type="submit" value="Save" />
            </form>
        )
    }
}
export default CoursesPage
