---
---

function getfile(file) {
        var data;
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            file = rawFile.response;
            data = JSON.parse(file);
            return data;
        }
        rawFile.send(null);
        return data;
}

function openDialog() {
    document.getElementById("myForm").style.display = "block";
}

function closechat() {
    document.getElementById("myForm").style.display = "none";
}

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i]['title'].substr(0, val.length).toUpperCase() == val.toUpperCase() || arr[i]['content'].toUpperCase().indexOf(val.toUpperCase()) != -1) {
                b = document.createElement("DIV");
                b.setAttribute("class", "element");
                if (arr[i]['title'].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    b.innerHTML = "<strong>" + arr[i]['title'].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i]['title'].substr(val.length);
                }
                else {
                    b.innerHTML += arr[i]['title'];
                }
                b.innerHTML=`<span class="autoCompleteTitle">${b.innerHTML}</span>`
                b.innerHTML += `<span class="autoCompleteTags"><a class="autocomplete-link" href="{{site.url}}/tags#${arr[i]['tag']}"><span class=autocomplete-tag><i class="fa fa-tag" aria-hidden="true"></i>&nbsp;&nbsp;${arr[i]['tag']}</span></a><span>`;
                b.innerHTML += "<input type='hidden' value='" + arr[i]['title'] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    var category;
                    for (var j = 0; j < arr.length; j++) {
                        if (arr[j].title == inp.value) {
                            category = arr[j]['url'];
                        }
                    }
                    window.location = "{{site.url}}"+category;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
            scroll();
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
            scroll();
        } else if (e.keyCode == 13) {
            if (currentFocus > -1) {
            e.preventDefault();
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    function scroll(){
        $(".autocomplete-items").scrollTop(0);//set to top
        $(".autocomplete-items").scrollTop(($('.autocomplete-active:first').offset().top - $('.autocomplete-items').offset().top)-$(".autocomplete-items").height()+$(".autocomplete-active").height()+20);
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/"), window.location.pathname.length) == "/categories") {
    window.onload = url();
}

function url() {
    var fullCategory=[];
    var url_string = window.location.href;
    var url_format = new URL(url_string);
    var paramCategory = url_format.searchParams.get("category");
    categoryList= document.getElementById("categoryList");
    if(paramCategory){
        getPost = this.getfile("{{site.url | relative_url}}/posts.json");
        for (var k = 0; k < getPost.length; k++) {
            if (getPost[k]['category'] == paramCategory) {
                fullCategory.push(getPost[k])
            }
        }
        listofposts(fullCategory)
        document.getElementById("category_name").innerHTML=paramCategory;
    }
    else{
        window.location.href="category-list.html"
    }
}

function listofposts(posts) {
    for(var i=0;i<posts.length;i++){
        categoryList.innerHTML += `<div class="column col-12">
        <a href="{{ site.url}}${posts[i].url}">
          <div class="card card-link my-1" itemprop="blogPosts" itemscope="" itemtype="http://schema.org/BlogPosting">
            <div class="card-body">
              <div class="columns col-x-align">
                <div class="column col col-sm-12">
                  <h5 class="text-semibold m-0">${posts[i].title}</h5>
                  <p class="m-0 text-dark">${posts[i]["short-description"]}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>`;
    }   
}

autocomplete(document.getElementById("search-input"), this.getfile("{{site.url}}/posts.json"));
// setIframeHeight();
// function setIframeHeight()
// {
  
//     var iframe=document.getElementById("footeriframe")
//     var scrollHeight=iframe.scrollHeight;
//     console.log(scrollHeight)
//     var scrollWidth=iframe.scrollWidth;
//     var clientHeight=iframe.clientHeight;
//     console.log(clientHeight)
//     var clientWidth=iframe.clientWidth;
//     var differenceHw=clientWidth-clientHeight;
    // if(differenceHw>0 && differenceHw >scrollHeight)
    // {
    //     iframe.height=scrollHeight + "px";
    // }
    // else if( differenceHw > 0 && differenceHw < scrollHeight)
    // {
    //     iframe.height=(differenceHw * 2)+ "px";
    // }
    // else if(differenceHw<0){
    //     iframe.height=(scrollHeight+clientHeight)+ "px";
    // }
    // else{
        //iframe.height=scrollHeight+clientHeight + "px";
    // }

   
//}


// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(max-width: 600px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    }
 
    // media query change
    function WidthChange(mq) {
        var iframe=document.getElementById("footeriframe")
    if (mq.matches) {
        console.log("Mq",mq)
       
        var scrollHeight=iframe.scrollHeight;
        var clientHeight=iframe.clientHeight;
        iframe.height=scrollHeight+clientHeight+ "px";
    } else {
        iframe.height=460+ "px";
    }
    
 }
