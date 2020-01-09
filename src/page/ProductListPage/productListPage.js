import React, { Component } from 'react';
import ProductList from './../../components/ProductList/productlist'
import ProductItem from './../../components/ProductItem/productitem'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/Action';
class productListPage extends Component {
    // componentDidMount được gọi sau khi render lần đầu tiên
    // do là axios sẽ mất 5s để lấy dữ liệu trên server còn render chỉ mất 1s để hiển thị
    //  nên ta sẽ đưa nó vào componentDidMount để sau khi refresh nó sẽ hiển thị
    componentDidMount() {
        this.props.fetchAllProducts();
    }
    //Xóa
    onDelete = (id) => {
        this.props.ondeleteProducts(id);
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (<ProductItem key={index}
                    product={product}
                    onDelete={this.onDelete}
                    index={index} />);
            })
        }
        return result
    }
    render() {
        var { product } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1 className='text-center'>Quản Lý Sản Phẩm</h1><hr />
                <Link to='/product/add' className="btn btn-info"
                >Thêm Sản Phẩm</Link>
                <ProductList>
                    {this.showProducts(product)}
                </ProductList>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        // state.products là vì nó chuyển 1 cái state trên store thành 1 props
        // cụ thể là state của products, vì trong index.js ta import products từ products.js
        product:state.products
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return{
        fetchAllProducts : () => {
            dispatch(actions.actFetchProductsRequest())
        },
        ondeleteProducts : (id) => {
            dispatch(actions.actDeleteProductsRequest(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(productListPage);
