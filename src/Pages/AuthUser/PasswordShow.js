
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const passwordStyle = {
  paddingLeft: 8,
  paddingRight: 8,
  borderTop: '1px solid #ced4da',
  borderBottom: '1px solid #ced4da',
  borderRight: '1px solid #ced4da',
  display: 'flex',
  alignItems: 'center',
  borderTopRightRadius: '0.25rem',
  borderBottomRightRadius: '0.25rem',
  zIndex: 99
}

const svgStyle = {
  fontSize: 18
}


const PasswordShow = (props) => {
  const { passShow, onclick } = props;
  return (
    <span className="password_show_toggle" style={passwordStyle} onClick={onclick}>
      {passShow ? <VisibilityIcon style={svgStyle} /> : <VisibilityOffIcon style={svgStyle} />}
    </span>
  )
}

export default PasswordShow