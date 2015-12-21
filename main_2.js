(function($, Snap, containerId) {
    var self = this,
        containerSnap = Snap('#' + containerId),
        $containerNode = $('#' + containerId),
        paper = null,
        svgWidth = 0,
        svgHeight = 0,
        windowWidth = 0,
        windowHeight = 0;

    Snap.load('zoomadafaka.svg', init);

    function init(svgData) {
        // TODO {
        $containerNode.html('');
        // } TODO

        containerSnap.append(svgData);
        paper = Snap(containerSnap.node.children[0]);

        initZoom();
        initEvents();
        panToCenter();
    }

    function initZoom() {
        paper.zpd();
    }

    function panToCenter() {
        var paperInfo = paper.getBBox(),
            svgWidth = paperInfo.width,
            svgHeight = paperInfo.height,
            windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            xCoord = svgWidth <= windowWidth ? 0 : (svgWidth - windowWidth) / 2 * -1,
            yCoord = svgHeight <= windowHeight ? 0 : (svgHeight - windowHeight) / 2 * -1;

        paper.panTo(xCoord, yCoord);
    }

    function initEvents() {
        $('#greenCircle').on('click', function(event) {
            event.preventDefault();
            alert('GreenCricle');
        });
    }

}(jQuery, Snap, 'mySvg'));
