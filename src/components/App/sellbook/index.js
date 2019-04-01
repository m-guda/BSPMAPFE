import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import LoginNav from '../loginnav/index'

var body;
let fields1;
class SellBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
          title:'',
          author:'',
          price: '',
          count:'',
          imageUrls:[],
          category:'',
          description:'',
      },
      fields:{},
      errors: {},
      file: '',
      imagePreviewUrl: '',
      result:'',
      img:[],
     // selectedCategory: ""
    };
      this.handleChange = this.handleChange.bind(this);
      this.submitSellForm = this.submitSellForm.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
      this._handleImageChange = this._handleImageChange.bind(this);
    //  this.handleCategory = this.handleCategory.bind(this);
    }
  /*  handleCategory(e) {
      this.setState({category: e.target.value})
      console.log("catttttttssssss"+ this.)
    }*/
    _handleSubmit(e) {
     // e.preventDefault();
     console.log('.......'+this.state.form.imageUrls)
     body = {
      imageUrls:this.state.form.imageUrls,
     }
     console.log(body);
      console.log('handle uploading-', this.state.file);
      const url = "http://10.10.200.19:9000/images"; 
      const formdata=new FormData()
        formdata.append("file",this.state.file);
        
      let headers = new Headers();
  
          formdata.append("file",this.state.file);
  
          headers.append('Content-Type', 'multipart/form-data');
          headers.append('Accept', 'application/json');
      
          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');
      
          headers.append('GET', 'POST');
          
          e.preventDefault();
          
          fetch(url, {
            headers: headers,
            method: 'POST',
            withCredentials:true,
            credentials:'include',
            headers:{
              'Access-Control-Allow-Origin': url
            },
            body: formdata
          })               
          .then(r=> {r.json()
            .then(response=>{console.log(response)
               this.setState ({
                 result: JSON.stringify(response.image_url)
               })
               console.log("result image:"+this.state.result.replace('\"','',))
               this.setState ({
                 result: this.state.result.replace('\"','',)
               })
               console.log("result image:"+this.state.result.replace('\"','',))
               this.setState ({
                 result: this.state.result.replace('\"','',)
               })
               if(r.status==200){
                 console.log("success")
                 this.setState(
                   {
                     img:this.state.img.concat(this.state.result)
                   })
                   console.log("img in state appending "+this.state.img)
               }
              
            })
           })
         .catch(() => console.log("Can’t access " + url + " response. "))
        
     }
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  history = createHistory(this.props);


  submitSellForm(e) {
    let res;
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["title"] = "";
      fields["author"] = "";
      fields["price"] = ""; 
      fields["count"] = ""; 
      fields["category"] = ""; 
      fields["imageUrls"]=[];
      fields["description"]="";
      this.setState({fields:fields});
      let store = this.state;
      store.form.name = this.state.fields["title"];
      store.form.location = this.state.fields["author"];
      store.form.category = this.state.fields["category"];
      console.log("HEyya" + store.form.category)
      store.form.price = this.state.fields["price"];
      store.form.rating = this.state.fields["count"];
     console.log('img........'+this.state.img);
      store.form.imageUrls=this.state.img;
     store.form.description = this.state.fields["description"];

     // console.log(imageUrls);
      this.setState(store);
      console.log("Form name"+this.state.form.title);
      console.log("Form location"+this.state.form.author);
      console.log("Form price"+this.state.form.price);
      console.log("Form ranking"+this.state.form.count);
      console.log("Form category"+this.state.form.category);
      console.log("Form imgurl"+this.state.form.imageUrls);
      console.log("Form description"+this.state.description);
    }
    let token = localStorage.getItem("AccessToken");
    const url = "http://10.10.200.19:9000/books";
    console.log('token '+token);
    const AuthStr = 'Bearer '.concat(token);
    let headers = new Headers();
  
    //console.log(body);
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', AuthStr);
    console.log(AuthStr);
    headers.append('Access-Control-Allow-Origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');
  
    headers.append( 'GET','POST');
    console.log(url);
    body = {
      title: this.state.fields.title,
      author : this.state.fields.author,
      price:this.state.fields.price,
      count:this.state.fields.count,
     imageUrls:this.state.form.imageUrls,
     category:this.state.fields.category,
     description:this.state.fields.description,
    }
   
    console.log(body);
    console.log(token);
    e.preventDefault();
    fetch(url, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body),
        withCredentials:true,
                credentials:'include',
                headers:{
                    'Authorization': 'Bearer ' + token,
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': url
                },
       
    })
    
  //.then(console.log(this.state.fields))
 .catch(() => console.log("Can’t access " + url + " response. "))

          alert("Form submitted");
      }
      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        if (!fields["title"]) {
          formIsValid = false;
          errors["title"] = "*Please enter your book title.";
        }
        if (!fields["author"]) {
          formIsValid = false;
          errors["author"] = "*Please enter the author.";
        }
        if (!fields["price"]) {
          formIsValid = false;
          errors["price"] = "*Please enter the price.";
        }
        if (!fields["count"]) {
          formIsValid = false;
          errors["count"] = "*Please enter the count.";
        }
        this.setState({
          errors: errors
        });
        return formIsValid;
      }
  

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img style={{width:"20%",height:"20%"}} src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
const { form} = this.state;
    return (
      <div>
      <LoginNav /><br/><br/><br/>
      <div class ="container">
      <div class="card">
        <div class="card-body px-lg-6 pt-0" >
        <h3 className="my-3"> Sell A Book </h3>
        <form method="post"  name="sellForm"  onSubmit= {this.submitSellForm} >
   <div class="md-form">
   <label for="inputIconEx1">Book Title</label>
   <input type="text" id="inputIconEx1" class="form-control" name="title" placeholder="Enter Book title"  value={this.state.fields.title} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.title}</div>
  </div>
   <div class="md-form">
   <label for="inputIconEx2">Author</label>
   <input type="text" id="inputIconEx2" class="form-control" name="author" placeholder="Enter author name"  value={this.state.fields.author} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.author}</div>
  </div>
   <div class="md-form">
   <label for="inputIconEx3">Price</label>
   <input type="price" id="inputIconEx1" class="form-control" name="price" placeholder="Enter price of the book"  value={this.state.fields.price} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.price}</div>
   </div>
   <div class="md-form">
   <label for="inputIconEx4">Copies</label>
   <input type="text" id="inputIconEx4" className="form-control" name="count" placeholder="Enter number of copies"  value={this.state.fields.count} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.count}</div>
   </div>
   <div class="md-form">
   <label for="inputIconEx5">Description</label>
   <input type="textArea" id="inputIconEx5" className="form-control" name="description" placeholder="Enter description"  value={this.state.fields.description} onChange={this.handleChange} />
   <div className="errorMsg">{this.state.errors.count}</div>
   </div><br/>
   <div class="md-form">
   <div class="form-group col-md-6">
		  <label>Category</label>
		  <select id="inputState" class="form-control" value={this.state.category} name="category" onChange={this.handleChange} >
		    <option> Choose...</option>
		      <option value="History">History </option>{console.log(this.state.category)}
		      <option value="Education">Education </option>
          <option value="Art">Art </option>
          <option value="Mystery">Mystery </option>
          <option value="Fantacy">Fantacy </option>
          <option value="Biography">Biography </option>
          <option value="others">Others </option>
         
		  </select>
		</div>
    {console.log(this.state.category)}
    
   </div>
   <div class="md-form">
   <label for="inputIconEx6">Upload image</label>
   <input className="fileInput" type="file" name="imageUrls" onChange={(e)=>this._handleImageChange(e)} /><br></br>
                <div className="imgPreview" ><br></br>
                  {$imagePreview  }
                </div><br></br>
               <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button><br></br>
</div>
   
   <button class="btn btn-info btn-block my-4"  type="submit">Submit</button>   
   </form>
   </div>
   </div>
   </div>
  
      </div>
      );
    }
  }
  export default SellBook;