import React from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import CreateFolderAction from '../ContextMenu/ContextMenuActions/CreateFolderAction.jsx';
import CreateFileAction from '../ContextMenu/ContextMenuActions/CreateFileAction.jsx';
import UploadFileAction from '../ContextMenu/ContextMenuActions/UploadFileAction.jsx';
import SolidLoginAction from '../ContextMenu/ContextMenuActions/SolidLoginAction';
import SolidLogoutAction from '../ContextMenu/ContextMenuActions/SolidLogoutAction.jsx';

class ThreeDotsMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <div style={{marginLeft:'1em'}}>
        <IconButton color="inherit" 
          aria-label="More"
          aria-owns={Boolean(anchorEl) ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <CreateFolderAction handleClose={this.handleClose} />
          <CreateFileAction handleClose={this.handleClose} />
          <UploadFileAction handleClose={this.handleClose} />
          { isLoggedIn ?
            <SolidLogoutAction handleClose={this.handleClose} />
            : <SolidLoginAction handleClose={this.handleClose} />
          }
        </Menu>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreeDotsMenu);
