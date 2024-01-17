import React from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
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
        /**
         * dispatch allows us to dispatch our actions, it is injected automatically if we don't add mapDispatchToProps to connect
         * we are dispatching create course action and passing it to the course
         */
        this.props.actions.createCourse(this.state.course)
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
                {this.props.courses.map((course) => (
                    <div key={course.id}>{course.title}</div>
                ))}
            </form>
        )
    }
}

function mapStateToProps(state) {
    /**
     * Request only the data your component needs.. otherwise if we expose the entire redux store then the component
     * will re-render when any data changes in redux store
     */
    return { courses: state.courses }
}

function mapDispatchToProps(dispatch) {
    return {
        /**
         * here we can pass all of our course actions or just one course to bind  bindActionCreators(courseActions.createCourse, dispatch
         */

        actions: bindActionCreators(courseActions, dispatch),
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
}

/** connects our react container components to redux
 * it takes in two parameters mapStateToProps and mapDispatchToProps (optional)
 * mapDispatchToProps determines which actions we want to expose on our components.
 * if we omit mapDispatchToProps then our component gets dispatch property injected automatically via props
 */

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
