import React, { Component } from 'react';
// import callAPI from './../../utils/apiCaller'
import { connect } from 'react-redux';
import * as actions from './../../actions/Action';
class productActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txt_name: '',
            txt_gia: '',
            ckbStatus: ''
        }
        this.onChangeInput=this.onChangeInput.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentDidMount() {
        var { match } = this.props;
        var id = match.params.id;
        this.props.onEditProduct(id)
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var  itemEditing  = nextProps.itemEditing;
            this.setState({
                id: itemEditing.id,
                txt_name: itemEditing.name,
                txt_gia: itemEditing.price,
                ckbStatus: itemEditing.status
            })
        }
    }
    onChangeInput(event){
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    onSubmit(event){
        event.preventDefault();
        var { history } = this.props;
        var { txt_name, id, txt_gia, ckbStatus } = this.state
        // tạo biến product để thêm
        //lấy value từ state, vì khi người dùng nhập giá trị vào các ô input
        //các giá trị đó được lưu vào trong state, ta sẽ lấy ra và gửi lên trên server và gửi vào trong store
        var product = {
            id:id,
            name: txt_name,
            price: txt_gia,
            status: ckbStatus
        }
        // kiểm tra xem người dùng có nhập không, nếu không nhập thì không cho gửi lên server
        if (txt_name === null || txt_name === '') {
            alert('Chưa Nhập Tên Sản Phẩm');
        }
        else if (txt_gia === null || txt_gia === '') {
            alert('Chưa Nhập Giá Sản Phẩm');
        }
        else if (id) {
            this.props.onUpDateProduct(product);
            history.goBack()
        }
        else if (id === null || id === '') {
            this.props.onAddProduct(product);
            history.goBack()
        }
    }
    // history.goBack() dùng để quay lại trang trước đó
    render() {
        var { txt_name, txt_gia, ckbStatus } = this.state
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form onSubmit={this.onSubmit}>
                    <h2 className="text-center">Thêm-Sửa Sản Phẩm </h2><hr />
                    <div className="form-group">
                        <label>Tên Sản Phẩm:</label>
                        <input type="text"
                            className="form-control"
                            placeholder="Tên Sản Phẩm"
                            name='txt_name'
                            value={txt_name}
                            onChange={this.onChangeInput} />
                    </div>
                    <div className="form-group">
                        <label>Giá:</label>
                        <input type="number"
                            className="form-control"
                            placeholder="Giá"
                            name='txt_gia'
                            value={txt_gia}
                            onChange={this.onChangeInput} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                name='ckbStatus'
                                value={ckbStatus}
                                onChange={this.onChangeInput}
                                checked={ckbStatus} />
                            Còn Hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing[0]
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (products) => {
            dispatch(actions.actAddProductsRequest(products))
        },
        onEditProduct: (id) => {
            dispatch(actions.actEditProductsRequest(id))
        },
        onUpDateProduct: (product) =>{
            dispatch(actions.actUpdateProductsRequest(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(productActionPage);
